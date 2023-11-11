export interface IUser {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  location: {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
      latitude: string,
      longitude: string
    },
    timezone: {
      offset: string,
      description: string
    }
  },
  email: string,
  login: {
  },
  dob: {
  },
  registered: {
  },
  phone: string,
  cell: string,
  id: {
  },
  picture: {
  },
  nat: "BR"
};

export interface IUserModel {
  _id?: string,
  name: string,
  email: string,
  location: string
}
