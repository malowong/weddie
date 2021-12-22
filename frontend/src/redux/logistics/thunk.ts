import { Dispatch } from 'redux';
import { ILogisticsAction } from './action';

export function getAllMaterialItemsThunk() {
  return async (dispatch: Dispatch<ILogisticsAction>) => {
    const resp = 'TODO';

    if (resp.status === 200) {
      const data = await resp.json();
      dispatch(fetchDataSuccess(data.items));
    }
  };
}
