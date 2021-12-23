import { config } from '../../app.json';

export async function fetchGetGuestList() {
  const resp = await fetch(`${config.BACKEND_URL}/guest/list`, {
    headers: {
      Authorization: `Bearer ${'TODO'.getItem('token')}`,
    },
  });

  return resp;
}
