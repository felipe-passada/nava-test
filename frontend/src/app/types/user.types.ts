export type User = {
  id?: string,
  name?: string,
  email?: string,
  location?: string
};

export type UserList = Array<User>;

export interface LocalUser {
    token: string;
    email: string;
};

