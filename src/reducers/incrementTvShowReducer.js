export const incrementTvShowReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_TVSHOW':
      return state +=1
    default:
      return state
  }
}