import AsyncStorage from '@react-native-async-storage/async-storage';
import { config, displayName } from '../../app.json';
import { ISignupUser } from '../redux/auth/state';

<<<<<<< HEAD
export const fetchLogin = async (email: string, password: string) => {
  console.log(email)
=======
export const fetchLogin = async (phone: string, password: string) => {
  console.log(phone);
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
  const resp = await fetch(`${config.BACKEND_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return resp;
};

export const fetchUser = async (token: string) => {
  const resp = await fetch(`${config.BACKEND_URL}/api/users`, {
    headers: {
<<<<<<< HEAD
      Authorization: `Bearer ${token}`
    }
  })
=======
      Authrization: `Bearer ${token}`,
    },
  });
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
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
<<<<<<< HEAD
      console.log("failed")
      throw new Error(result.message)
=======
      console.log('failed');
      return result.message;
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
    }

    await AsyncStorage.setItem('token', result.token);
  } catch (e) {
    // console.error(e);
    throw e
  }
};
