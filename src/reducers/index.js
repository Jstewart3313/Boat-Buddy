import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { musicReducer } from './musicReducer';
import { tvShowReducer } from './tvShowReducer';


const rootReducer = combineReducers({
  movies: movieReducer,
  music: musicReducer,
  tvShow: tvShowReducer
})


export default rootReducer;
