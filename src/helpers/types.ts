export interface UserType {
    id: number,
    username: string,
    profilePicture: string
}

export interface LoginInput {
    username: string,
    password: string,
}

export type UserResponse = {
    _id: string;
    username: string;
    email: string;
    dateOfBirth: Date;
    age: number;
    profilePicture: string;
    coverPicture: string;
    followers: any;
    followings: any;
    isAdim: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    csrfToken: string;
  };