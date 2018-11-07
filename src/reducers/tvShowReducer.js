export const tvShowReducer = (state = [], action) => {
  switch (action.type) {
    case "TV_SHOW":
      return action.tvShow;
    default:
      return state;
  }
};
