import produce from 'immer';
import { ILogisticsAction } from './action';
import { ILogisticsState } from './state';

const initialState: ILogisticsState = {
  materialList: [
    {
      id: 1,
      itemName: '攝影師',
      amount: 5000,
    },
    { id: 2, itemName: '大冚姐', amount: 3000 },
  ],
};

export const logisticReducers = produce(
  (state: ILogisticsState, action: ILogisticsAction) => {
    switch (action.type) {
      case '@@Logistics/FETCH_SUCCESS':
        state.materialList = action.data;
        return;
      case 'TODO2':
        return state;
      default:
        return state;
    }
  },
  initialState
);
