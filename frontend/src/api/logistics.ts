import { config } from '../../app.json';

export async function fetchGetLogisticsList() {
  const resp = await fetch(`${config.BACKEND_URL}/logistics/list`, {
    headers: {
      Authorization: `Bearer ${'TODO'.getItem('token')}`,
    },
  });

  return resp;
}
