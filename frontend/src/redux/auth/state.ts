export interface IUser {
  id: number,
  phone: number,
  username: string,
  password: string
}

export interface IAuthState {
    isAuthenticated: boolean | null,
    token: string | null,
    user: IUser | null,
    message: string | null,
  }
