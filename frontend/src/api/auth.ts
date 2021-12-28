import AsyncStorage from '@react-native-async-storage/async-storage';
import { config, displayName } from '../../app.json';
import { ISignupUser } from '../redux/auth/state';

export const fetchLogin = async (phone: string, password: string) => {
  console.log(phone);
  const resp = await fetch(`${config.BACKEND_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, password }),
  });

  return resp;
};

export const fetchUser = async (token: string) => {
  const resp = await fetch(`${config.BACKEND_URL}/users/`, {
    method: 'GET',
    headers: {
      Authrization: `Bearer ${token}`,
    },
  });
  return resp;
};

export const fetchRegister = async (signupUser: ISignupUser) => {
  try {
    console.log(signupUser);

    const resp = await fetch(`${config.BACKEND_URL}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupUser),
    });

    const result = await resp.json();

    if (resp.status !== 200) {
      console.log('failed');
      return result.message;
    }

    await AsyncStorage.setItem('token', result.token);
  } catch (e) {
    console.error(e);
  }
};
