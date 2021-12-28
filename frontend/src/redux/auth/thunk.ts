import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { fetchLogin, fetchRegister, fetchUser } from '../../api/auth';
<<<<<<< HEAD
import { loginFailed, loginSuccess, logout } from './actions';
import { ISignupUser } from './state';

export function loginThunk(email: string, password: string) {
    return async (dispatch: Dispatch<any>) => {
        try {
            console.log("hi")
            const resp = await fetchLogin(email, password);
            const result = await resp.json();

            console.log("result", result)

            if (resp.status !== 200) {
                return dispatch(loginFailed(result.error))
            }

            if (!result.token) {
                return dispatch(loginFailed('No Token'))
            }

            await AsyncStorage.setItem('token', result.token);
            dispatch(loginSuccess(result.token, result.userData));

        } catch (e) {
            console.error(e)
            dispatch(loginFailed('Unknown Error'))
        }

=======
import {
  loginFailed,
  loginSuccess,
  logout,
  registerFailed,
  registerSuccess,
} from './actions';
import { ISignupUser } from './state';

export function loginThunk(email: string, password: string) {
  return async (dispatch: Dispatch<any>) => {
    try {
      const resp = await fetchLogin(email, password);
      const result = await resp.json();

      if (resp.status !== 200) {
        return dispatch(loginFailed(result.error));
      }

      if (!result.token) {
        return dispatch(loginFailed('No Token'));
      }

      await AsyncStorage.setItem('token', result.token);
      dispatch(loginSuccess(result.token, result.user));
    } catch (e) {
      console.error(e);
      dispatch(loginFailed('Unknown Error'));
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
    }
  };
}

export function restoreLoginThunk() {
<<<<<<< HEAD
    return async (dispatch: Dispatch<any>) => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token == null) {
                dispatch(logout())
                return
            }
            const resp = await fetchUser(token)
            const result = await resp.json()

            console.log(result)

            if (!result.userData) {
                return dispatch(logout())
            }

            if (!result.userData.id) {
                return dispatch(logout())
            }

            dispatch(loginSuccess(token, result.userData))

        } catch (e) {
            console.error(e)
            dispatch(logout())
        }
=======
  return async (dispatch: Dispatch<any>) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token == null) {
        dispatch(logout());
        return;
      }
      const resp = await fetchUser(token);
      const result = await resp.json();

      if (!result.id) {
        return dispatch(logout());
      }

      dispatch(loginSuccess(token, result));
    } catch (e) {
      console.error(e);
      dispatch(logout());
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
    }
  };
}

export function logoutThunk() {
  return async (dispatch: Dispatch<any>) => {
    await AsyncStorage.removeItem('token');
    dispatch(logout());
  };
}

<<<<<<< HEAD
// export function signupThunk(signupUser: ISignupUser) {
//     return async (dispatch: Dispatch<any>) => {
//         try {
//             const resp = await fetchRegister(signupUser);
//             const result = await resp.json();

//             if (resp.status !== 200) {
//                 return dispatch(registerFailed(result.error))
//             }

//             if (!result.token) {
//                 return dispatch(registerFailed('No Token'))
//             }

//             await AsyncStorage.setItem('token', result.token);
//             dispatch(registerSuccess(result.token, result.user));

//         } catch (e) {
//             console.error(e)
//             dispatch(registerFailed('Unknown Error'))
//         }

//     }
// }
=======
export function signupThunk(signupUser: ISignupUser) {
  return async (dispatch: Dispatch<any>) => {
    try {
      const resp = await fetchRegister(signupUser);
      const result = await resp.json();

      if (resp.status !== 200) {
        return dispatch(registerFailed(result.error));
      }

      if (!result.token) {
        return dispatch(registerFailed('No Token'));
      }

      await AsyncStorage.setItem('token', result.token);
      dispatch(registerSuccess(result.token, result.user));
    } catch (e) {
      console.error(e);
      dispatch(registerFailed('Unknown Error'));
    }
  };
}
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
