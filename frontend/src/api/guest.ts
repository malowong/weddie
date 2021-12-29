import { config } from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchGetGuestList() {
  const resp = await fetch(`${config.BACKEND_URL}/guest/list`, {
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
    },
  });

  return resp;
}

export const fetchAddGuest = async (guestData: any) => {
  try {
    console.log('guest data: ', guestData);

    const resp = await fetch(`${config.BACKEND_URL}/api/guest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guestData),
    });

    const result = await resp.json();

    if (resp.status !== 200) {
      console.log('failed');
      throw new Error(result.message);
    }
  } catch (e) {
    throw e;
  }
};
