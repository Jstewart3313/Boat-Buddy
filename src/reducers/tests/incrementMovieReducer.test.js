import { incrementMovieReducer } from "../incrementMovieReducer";

describe("incrementMovieReducer", () => {
  it("should return default state if type does not change", () => {
    const expected = 0;
    const action = {
      type: "DUMMY_ACTION",
      movie: "movie"
    };
    const result = incrementMovieReducer(undefined, action);
    expect(result).toEqual(expected);
  });
  it("should update state with number if type matches", () => {
    const expected = 1;
    const action = {
      type: "INCREMENT_MOVIE",
      movie: "movie"
    };
    const result = incrementMovieReducer(undefined, action);
    expect(result).toEqual(expected);
  });
  it("should always update state when type matches", () => {
    const expected = 2;
    const action = {
      type: "INCREMENT_MOVIE",
      movie: "movie"
    };
    const mockState = 1;
    const result = incrementMovieReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
