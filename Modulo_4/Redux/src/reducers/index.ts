import { combineReducers } from "redux";
import { memberReducer, memberState } from "./memberReducer";
import { FilterState, memberFilterReducer } from "./memberFilterReducer";

export interface State {
  memberReducer: memberState;
  memberFilterReducer: FilterState;
}

export const reducers = combineReducers<State>({
  memberReducer,
  memberFilterReducer
});
