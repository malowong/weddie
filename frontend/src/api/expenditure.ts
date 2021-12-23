import { config } from '../../app.json';

export async function fetchGetExpenditureList() {
  const resp = await fetch(`${config.BACKEND_URL}/expenditure/list`, {
    headers: {
      Authorization: `Bearer ${'TODO'.getItem('token')}`,
    },
  });

  return resp;
}
