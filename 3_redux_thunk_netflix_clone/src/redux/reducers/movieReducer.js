const initialState = {
  isLoading: false,
  error: null,
  movies: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;

    case "Y":
      return state;

    case "Z":
      return state;

    default:
      return state;
  }
};

export default movieReducer;
