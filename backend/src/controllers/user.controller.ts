import { IUser } from "../types/user.types";
import UserService from "../services/user.service";

const createUsers = async () => {
  const insertedUsers = await UserService.newUser();
  return insertedUsers;
}

const findUsers = async () => {
  const usersFound = UserService.performSearch();
  return usersFound;
}

const findUser = async (id:string) => {
  const foundUser = UserService.performSearch(id);
  if (!foundUser) throw new Error(`User id: ${id}, not found!`);

  return foundUser;
}

const updateUser = async (id:string, payload:IUser) => {
  const userUpdated = await UserService.performUpdate(id, payload);

  return userUpdated;

}

const deleteUser = async (id:string) => {
  const userDeleted = await UserService.performDeletion(id);

  return userDeleted;
}

export default {
  createUsers,
  updateUser,
  deleteUser,
  findUser,
  findUsers
} as const;
