export const movieReducer = ( state = [], action) => {
  switch(action.type) {
    case 'MOVIE':
    return [...state,...action.movies]
    default:
    return state
  }
}