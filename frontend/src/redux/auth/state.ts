export interface IUser {
  id: number,
  email: string,
  password: string
}

export interface ISignupUser {
  email: string,
  password: string,
  nickname: string,
  phone: string,
  gender: 'M' | 'F' | '',
  districtId: number | null,
};

export interface IAuthState {
    isAuthenticated: boolean | null,
    token: string | null,
    user: IUser | null,
    message: string | null,
  }
