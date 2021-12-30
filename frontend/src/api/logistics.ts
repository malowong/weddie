import { config } from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchGetLogisticsList() {
  const resp = await fetch(`${config.BACKEND_URL}/logistics/list`, {
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
    },
  });

  return resp;
}

export const fetchAddLogisticsItem = async (logisticsItem: any) => {
  try {
    console.log('logistics item: ', logisticsItem);

    const resp = await fetch(`${config.BACKEND_URL}/api/logistics/item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logisticsItem),
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

export const fetchUpdateLogisticsItem = async (logisticsItem: any) => {
  try {
    console.log('logistics item: ', logisticsItem);

    const resp = await fetch(`${config.BACKEND_URL}/api/logistics/item`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logisticsItem),
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

export const fetchDeleteLogisticsItem = async (itemId: number) => {
  try {
    console.log('item id: ', itemId);

    const resp = await fetch(
      `${config.BACKEND_URL}/api/logistics/item/${itemId}`,
      {
        method: 'DELETE',
      }
    );

    const result = await resp.json();

    if (resp.status !== 200) {
      console.log('failed');
      throw new Error(result.message);
    }
  } catch (e) {
    throw e;
  }
};
