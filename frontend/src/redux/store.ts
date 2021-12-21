import { combineReducers, createStore } from "redux";
import { IAuthState } from "./auth/state";
import { IMaterialAction } from "./material/action";
import { materialReducers } from "./material/reducer";
import { IMaterialState } from "./material/state";

export interface IRootState {
  auth: IAuthState;
  material: IMaterialState;
}

type IRootAction = IMaterialAction;

const rootReducer = combineReducers<IRootState>({
  auth: authReducers,
  material: materialReducers,
});

export default createStore<IRootState, IRootAction, {}, {}>(rootReducer);
