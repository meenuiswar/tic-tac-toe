## TIC-TAC-TOE

This is basically a web application for a two-player game of tic-tac-toe or X's and O's. Each player has their turn alternatively, and the first player to get three symbols in a row wins. There is also an option for undo, redo and reset at any point in the game.

This web-app has been implemented using react and redux.

live demo: https://meenuiswar.github.io/tic-tac-toe/

---

### Packages used:

- #### react and react-dom

  For implenting react.

- #### redux

  For the creation of store, and implementing the reducers.

- #### react-redux

  For the usage of Provider, connect function. This provides the wrapper components that manage the store.

- #### redux-undo
  redux-undo is a reducer enhancer (higher-order reducer). It provides the undoable function, which takes an existing reducer and a configuration object and enhances the existing reducer with undo-redo functionality.
