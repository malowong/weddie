import { config } from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchGetExpenditureList() {
  try {
    const resp = await fetch(`${config.BACKEND_URL}/api/budget/list`, {
      headers: {
        Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
      },
    });

    const result = await resp.json();

    if (resp.status !== 200) {
      console.log('failed');
      throw new Error(result.message);
    }
  } catch (e) {
    throw e;
  }
}

export async function fetchAddExpenditureItem(expenditureItemData: any) {
  try {
    console.log('expenditure item data: ', expenditureItemData);

    const resp = await fetch(`${config.BACKEND_URL}/api/budget/item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenditureItemData),
    });

    const result = await resp.json();

    if (resp.status !== 200) {
      console.log('failed');
      throw new Error(result.message);
    }
  } catch (e) {
    throw e;
  }
}
