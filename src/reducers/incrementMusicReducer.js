export const incrementMusicReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_MUSIC':
      return state +=1
    default:
      return state
  }
}