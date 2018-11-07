import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { musicReducer } from "./musicReducer";
import { tvShowReducer } from "./tvShowReducer";
import { incrementMovieReducer } from "./incrementMovieReducer";
import { incrementMusicReducer } from "./incrementMusicReducer";
import { incrementTvShowReducer } from "./incrementTvShowReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  music: musicReducer,
  tvShow: tvShowReducer,
  movieCounter: incrementMovieReducer,
  musicCounter: incrementMusicReducer,
  tvShowCounter: incrementTvShowReducer
});
