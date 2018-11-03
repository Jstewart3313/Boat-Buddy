export const musicReducer = ( state = [], action) => {
  switch(action.type) {
    case 'MUSIC':
    return [...state,...action.music]
    default:
    return state
  }
}