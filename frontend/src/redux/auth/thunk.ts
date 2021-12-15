import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { fetchLogin } from '../../api/auth';

export function loginThunk(username: string, password: string) {
    return async (dispatch: Dispatch<any>) => {
        const resp = await fetchLogin(username, password);
        // const result = await resp.json();

        // if (resp.status !== 200) {
        //     // dispatch(loginFailed(json.error))
        // } else {
        //     await AsyncStorage.getItem('token', result.token);
        //     dispatch(loginSuccess())
        // }

    }
}