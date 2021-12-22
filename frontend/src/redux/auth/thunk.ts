import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { fetchLogin, fetchUser } from '../../api/auth';
import { loginFailed, loginSuccess, logout } from './actions';

export function loginThunk(phone: string, password: string) {
    return async (dispatch: Dispatch<any>) => {
        try {
            const resp = await fetchLogin(phone, password);
            const result = await resp.json();

            if (resp.status !== 200) {
                return dispatch(loginFailed(result.error))
            }

            if (!result.token) {
                return dispatch(loginFailed('No Token'))
            }

            await AsyncStorage.setItem('token', result.token);
            dispatch(loginSuccess(result.token, result.user));

        } catch (e) {
            console.error(e)
            dispatch(loginFailed('Unknown Error'))
        }

    }
}

export function restoreLoginThunk() {
    return async (dispatch: Dispatch<any>) => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token == null) {
                dispatch(logout())
                return
            }
            const resp = await fetchUser(token)
            const result = await resp.json()

            if (!result.id) {
                return dispatch(logout())
            }

            dispatch(loginSuccess(token, result))

        } catch (e) {
            console.error(e)
            dispatch(logout())
        }
    }
}

export function logoutThunk() {
    return async (dispatch: Dispatch<any>) => {
        await AsyncStorage.removeItem('token')
        dispatch(logout())
    }
}