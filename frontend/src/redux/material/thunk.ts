import { Dispatch } from 'redux';
import { IMaterialAction } from './action';

export function getAllMaterialItemsThunk() {
  return async (dispatch: Dispatch<IMaterialAction>) => {
    const resp = 'TODO';

    if (resp.status === 200) {
      const data = await resp.json();
      dispatch(fetchDataSuccess(data.items));
    }
  };
}
