import { combineReducers, createStore } from "redux";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

export default createStore(rootReducer);
