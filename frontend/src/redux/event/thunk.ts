import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { fetchLogin, fetchRegister, fetchUser } from '../../api/auth';
import { fetchCreateEvent } from '../../api/event';
import { createEventFailed, createEventSuccess } from './actions';
import { ICreateEvent } from './state';

export function createEventThunk(event: ICreateEvent) {
    return async (dispatch: Dispatch<any>) => {
        try {
            const resp = await fetchCreateEvent(event);
            const result = await resp.json();

            if (resp.status !== 200) {
                return dispatch(createEventFailed(result.error))
            }
            
            dispatch(createEventSuccess(result));

        } catch (e) {
            console.error(e)
            dispatch(createEventFailed('Unknown Error'))
        }

    }
}