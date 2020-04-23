import React, { Component } from "react";
import "../css/index.css";
import Square from "./Sqaure";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import nextMove from "../actions/nextMove";
import reset from "../actions/reset";
import calculateWinner from "../actions/calculateWinner";
import resetWinner from "../actions/resetWinner";
import { ActionCreators as UndoActionCreators } from "redux-undo";

class Board extends Component {
  onClick = i => {
    if (this.props.winner === "") {
      this.props.nextMove(i);
    }
  };
  reset = () => {
    this.props.resetWinner();
    this.props.reset();
    this.props.clearHistory();
  };
  isGameDraw() {
    for (let i = 0; i < this.props.currentState.squares.length; i++) {
      if (this.props.currentState.squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.currentState.squares[i]}
        onClick={() => this.onClick(i)}
      />
    );
  }
  render() {
    this.props.calculateWinner(this.props.currentState.squares);
    const winner = this.props.winner;
    let status;
    if (winner !== "") {
      status = "Winner is :";
      status = status + winner;
    } else {
      const isDraw = this.isGameDraw();
      if (isDraw) {
        status = "This Game is a Draw";
      } else {
        status = "Next Player:";
        status = status + (this.props.currentState.xIsNext ? "X" : "O");
      }
    }
    return (
      <div className="game marginTop">
        <h1>TIC-TAC-TOE</h1>
        <div className="status">{status}</div>
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <div class="buttons">
          <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>
            Undo
          </button>
          <button className="marginLeft" onClick={() => this.reset()}>
            Reset
          </button>
          <button
            className="marginLeft"
            onClick={this.props.onRedo}
            disabled={!this.props.canRedo}
          >
            Redo
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentState: state.currentState.present,
    winner: state.winner.winner,
    canUndo: state.currentState.past.length > 0,
    canRedo: state.currentState.future.length > 0
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      nextMove: nextMove,
      reset: reset,
      calculateWinner: calculateWinner,
      resetWinner: resetWinner,
      onUndo: UndoActionCreators.undo,
      onRedo: UndoActionCreators.redo,
      clearHistory: UndoActionCreators.clearHistory
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);
