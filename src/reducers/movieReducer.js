export const movieReducer = ( state = [], action) => {
  switch(action.type) {
    case 'MOVIE':
    return action.movies
    default:
    return state
  }
}