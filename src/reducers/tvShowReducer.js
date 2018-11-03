export const tvShowReducer = ( state = [], action) => {
  switch(action.type) {
    case 'TV_SHOW':
    return [...state,...action.tvShow]
    default:
    return state
  }
}