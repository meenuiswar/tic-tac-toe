import XOReducer from "./XOReducer";
import calculateWinner from "./calculateWinnerReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  currentState: XOReducer,
  winner: calculateWinner
});

export default reducer;
