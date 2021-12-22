import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { IAuthActions } from "./auth/actions";
import { authReducers } from "./auth/reducers";
import { IAuthState } from "./auth/state";
import thunk, { ThunkDispatch } from 'redux-thunk'

// 1. Combining State by Composition
export interface IRootState {
  auth: IAuthState,
}

// 2. Combining Actions by Union
type IRootActions = IAuthActions

// 3. Combining Reducers by the function combineReducer()
const rootReducer = combineReducers<IRootState>({
  auth: authReducers
})

// why cannot find global? 

// @ts-ignore
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<IRootState, IRootActions, {}, {}>(rootReducer, 
  composeEnhancers(
      applyMiddleware(thunk)
  )
);
