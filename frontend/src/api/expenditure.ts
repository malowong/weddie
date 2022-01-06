import { config } from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function fetchGetExpenditureList() {
//   try {
//     const resp = await fetch(`${config.BACKEND_URL}/api/budget/list`, {
//       headers: {
//         Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
//       },
//     });

//     const result = await resp.json();

//     if (resp.status !== 200) {
//       console.log('failed');
//       throw new Error(result.message);
//     }
//   } catch (e) {
//     throw e;
//   }
// }

export async function fetchAddExpenditureItem(expenditureItemData: any) {
  try {
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

export const fetchUpdateBudgetItem = async (expenditureItemData: any) => {
  try {
    console.log(expenditureItemData);

    const resp = await fetch(`${config.BACKEND_URL}/api/budget/item`, {
      method: 'PUT',
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
};

export const fetchDeleteBudgetItem = async (data: {
  itemId: number;
  deleteTime: number;
}) => {
  try {
    const { itemId, deleteTime } = data;

    const resp = await fetch(
      `${config.BACKEND_URL}/api/budget/item/${itemId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deleteTime }),
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
