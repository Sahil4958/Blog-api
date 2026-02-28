interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IDecoded {
  id: string;
  name: string;
  email: string;
}

export { IUser, IDecoded };
