import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IAuthAction } from './auth/actions';
import { authReducers } from './auth/reducers';
import { IAuthState } from './auth/state';
import { ILogisticsAction } from './logistics/action';
import { logisticReducers } from './logistics/reducer';
import { ILogisticsState } from './logistics/state';

// 1. Combining State by Composition
export interface IRootState {
  auth: IAuthState;
  logistics: ILogisticsState;
}

type IRootAction = IAuthAction | ILogisticsAction;

// 3. Combining Reducers by the function combineReducer()
const rootReducer = combineReducers<IRootState>({
  auth: authReducers,
  logistics: logisticReducers,
});

// why cannot find global? 

// @ts-ignore
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<IRootState, IRootAction, {}, {}>(rootReducer, 
  composeEnhancers(
      applyMiddleware(thunk)
  )
);
