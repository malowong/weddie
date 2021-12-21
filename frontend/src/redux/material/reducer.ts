import produce from "immer";
import { IMaterialAction } from "./action";
import { IMaterialState } from "./state";

const initialState: IMaterialState = {
  materialList: [
    {
      id: 1,
      itemName: "攝影師",
      amount: 5000,
    },
    { id: 2, itemName: "大冚姐", amount: 3000 },
  ],
};

export const materialReducers = produce((state: IMaterialState, action: IMaterialAction) => {
  switch (action.type) {
    case "@@Material/FETCH_SUCCESS":
      state.materialList = action.data;
      return;
    case "TODO2":
      return state;
    default:
      return state;
  }
}, initialState);
