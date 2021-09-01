import { combineReducers } from "redux";
import { userReducer, repoReducer } from "./GithubProfile/Redux/reducer";

export const rootReducer = combineReducers({
  userReducer,
  repoReducer,
});
