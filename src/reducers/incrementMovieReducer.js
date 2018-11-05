export const incrementMovieReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_MOVIE':
      return state +=1
    default:
      return state
  }
}