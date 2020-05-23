import React from "react";
class Square extends React.Component {
  getValue() {
    let value;
    if (this.props.value === "X" || this.props.value === "x") {
      value = (
        <svg width="100" height="100">
          <line x1="20" y1="20" x2="80" y2="80" stroke="red" stroke-width="5" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="red" stroke-width="5" />
        </svg>
      );
    } else if (this.props.value === "O" || this.props.value === "o") {
      value = (
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="#edc913"
            stroke-width="5"
            fill="none"
          />
        </svg>
      );
    } else value = "";

    return value;
  }
  render() {
    let borderClass = "square border" + this.props.index;

    return (
      <button className={borderClass} onClick={() => this.props.onClick()}>
        {this.getValue()}
      </button>
    );
  }
}

export default Square;
