import { combineReducers, createStore } from 'redux';
import { IAuthState } from './auth/state';
import { ILogisticsAction } from './logistics/action';
import { logisticReducers } from './logistics/reducer';
import { ILogisticsState } from './logistics/state';

export interface IRootState {
  auth: IAuthState;
  logistics: ILogisticsState;
}

type IRootAction = ILogisticsAction;

const rootReducer = combineReducers<IRootState>({
  auth: authReducers,
  logistics: logisticReducers,
});

export default createStore<IRootState, IRootAction, {}, {}>(rootReducer);
