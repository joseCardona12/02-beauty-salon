export interface IUserLogged{
    id: string,
    token: string
}

export interface IUser {
    expires: string,
    user: IUserLogged,
}