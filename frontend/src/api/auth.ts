// shd be put in config.ts
const BACKEND_BASE_URL = 'http://localhost:8080'


export const fetchLogin = async (phone: number, password: string) => {
    const resp = await fetch(`${BACKEND_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });
  
    return resp;
  };

export const fetchUser = async (token: string) => {
    const resp = await fetch(`${BACKEND_BASE_URL}/users/`, {
        method: 'GET',
        headers: {
            Authrization: `Bearer ${token}`
        }
    })
    return resp;
}