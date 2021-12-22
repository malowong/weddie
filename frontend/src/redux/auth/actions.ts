import { IUser } from "./state"

export function loginSuccess(token: string, user: IUser) {
    return {
        type: "@@auth/LOGIN_SUCCESS" as const,
        token,
        user,
    }
}

export function loginFailed(message: string) {
    return {
        type: "@@auth/LOGIN_FAILED" as const,
        message,
    }
}

export function logout() {
    return {
        type: "@@auth/LOGOUT" as const,

    }
}


export type IAuthAction =
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailed>
    | ReturnType<typeof logout>