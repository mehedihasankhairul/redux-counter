import countNumber from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countNumber,
  // others working reducer (if any)
});

export default rootReducer;
