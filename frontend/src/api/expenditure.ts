import { config } from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchGetExpenditureList() {
  const resp = await fetch(`${config.BACKEND_URL}/api/budget/list`, {
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
    },
  });

  return resp;
}

export async function fetchCreateBudgetItem(budgetItem) {
  const resp = await fetch(`${config.BACKEND_URL}/api/budget/item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(budgetItem),
  });
}
