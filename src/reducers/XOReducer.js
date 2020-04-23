import undoable from "redux-undo";

const XOReducer = (
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  },
  action
) => {
  switch (action.type) {
    case "NEXT_MOVE":
      const squares = state.squares.slice();
      if (squares[action.payload] === null) {
        squares[action.payload] = state.xIsNext ? "X" : "O";
        return {
          squares: squares,
          xIsNext: !state.xIsNext
        };
      }
      return state;
    case "RESET":
      return {
        squares: Array(9).fill(null),
        xIsNext: true
      };
    default:
      return state;
  }
};

const undoableXOReducer = undoable(XOReducer);

export default undoableXOReducer;
