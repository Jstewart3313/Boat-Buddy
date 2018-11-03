export const musicReducer = ( state = [], action) => {
  switch(action.type) {
    case 'MUSIC':
    return action.music
    default:
    return state
  }
}