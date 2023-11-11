import UserModel from "../models/user.scheme";
import { IUserModel } from "../types/user.types";

const persistUsers = async (userList: Array<IUserModel>) => {
  const persistedUsers = await UserModel.insertMany(userList);
  return persistedUsers;
}

const updateUserRecord = async (userData: IUserModel) => {
  const updatedUser = await UserModel.findOneAndUpdate(userData);
  return updatedUser
}

const findUserRecordById = async (id: string) => {
  const userFound = await UserModel.findById(id);
  return userFound;
}

const findAndDeleteUserById = async (id: string) => {
  const deletedUserRecord = await UserModel.findOneAndDelete({ _id: id });
  return deletedUserRecord;
}

const findAllUsers = async () => {
  const usersFoundList = await UserModel.find();
  return usersFoundList;
}

export default {
  persistUsers,
  updateUserRecord,
  findAndDeleteUserById,
  findUserRecordById,
  findAllUsers
} as const;
