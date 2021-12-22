import {config, displayName} from '../../app.json';

export const fetchLogin = async (phone: number, password: string) => {
    const resp = await fetch(`${config.BACKEND_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });
  
    return resp;
  };

export const fetchUser = async (token: string) => {
    const resp = await fetch(`${config.BACKEND_URL}/users/`, {
        method: 'GET',
        headers: {
            Authrization: `Bearer ${token}`
        }
    })
    return resp;
}