import UserModel from "../models/user.scheme";
import { getUserData } from '../api/random'
import { IUser } from "../types/user.types";

export const createUsers = async () => {
  const { results } = await getUserData();
  const users:[] = results.map((user:IUser) => ({
    name: user.name.first,
    email: user.email,
    location: user.location.street.name + user.location.street.number
  }))

  const insertedUsers = await UserModel.insertMany(users);

  return insertedUsers;

}

export const findUsers = async () => {
  const foundUser = UserModel.find();

  return foundUser;
}

export const findUser = async (id:string) => {
  const foundUser = UserModel.findById(id);
  if (!foundUser) throw new Error(`User id: ${id}, not found!`);

  return foundUser;
}

export const updateUser = async (id:string, payload:IUser) => {
  const oldUser = await UserModel.findById(id);

  if (!oldUser) throw new Error(`User: ${id} not found!`)

  console.log("USER TO UDPATE:", oldUser.name);
  const newUser = {
    _id: id,
    name: payload.name ? payload.name : oldUser.name,
    email: payload.email ? payload.email : oldUser.email,
    location: payload.location ? payload.location : oldUser.location
  };

  const updatedUser = await UserModel.findOneAndUpdate(newUser);

  return updatedUser;

}

export const deleteUser = async (id:string) => {
  const userExists = await UserModel.findById(id);
  if (!userExists) throw new Error(`User: ${id} not found!`)

  const deletedUser = await UserModel.findOneAndDelete({ _id: id });

  return deletedUser;
}
