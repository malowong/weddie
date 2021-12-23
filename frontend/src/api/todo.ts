import { config } from '../../app.json';

export async function fetchGetTodoList() {
  const resp = await fetch(`${config.BACKEND_URL}/todo/list`, {
    headers: {
      Authorization: `Bearer ${'TODO'.getItem('token')}`,
    },
  });

  return resp;
}
