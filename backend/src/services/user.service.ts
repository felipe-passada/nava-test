import { getUserData } from '../api/random'
import UserRepository from '../repositories/user.repository'
import { IUser, IUserModel } from '../types/user.types'

const performDeletion = async (id: string) => {
  if (!id) return new Error('Missing user id');

  const userDeleted = await UserRepository.findAndDeleteUserById(id);
  return userDeleted;
}

const performSearch = async (id: string = null as any) => {
  let userSearchResult;

  if (!id) {
    userSearchResult = await UserRepository.findAllUsers();
  }

  else {
   userSearchResult = await UserRepository.findUserRecordById(id);
  }

  return userSearchResult;

}

const performUpdate = async (id: string, payload: any) => {
  const oldUser = await UserRepository.findUserRecordById(id);

  if (!oldUser) throw new Error(`User: ${id} not found!`)

  const newUser: IUserModel = {
    _id: id,
    name: payload.name ? payload.name : oldUser.name,
    email: payload.email ? payload.email : oldUser.email,
    location: payload.location ? payload.location : oldUser.location
  };

  const updatedUser = await UserRepository.updateUserRecord(newUser);

  return updatedUser;


}

const newUser = async () => {
  const { results } = await getUserData();
  const users:Array<IUserModel> = parseUsersFromApi(results);

  const persistedUsers = await UserRepository.persistUsers(users);
  return persistedUsers;
}

const parseUsersFromApi = (userList: [IUser]) => {
  const parsedUsers: Array<IUserModel> = userList.map((user:IUser) => ({
    name: user.name.first,
    email: user.email,
    location: user.location.street.name + user.location.street.number
  }));

  return parsedUsers;
}

export default {
  performUpdate,
  performSearch,
  performDeletion,
  newUser
}
