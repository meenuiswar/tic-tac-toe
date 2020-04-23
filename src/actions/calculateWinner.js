const calcWinner = squares => {
  return {
    type: "CALCULATE_WINNER",
    payload: squares
  };
};

export default calcWinner;
