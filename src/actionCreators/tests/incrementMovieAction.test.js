import { incrementMovieAction } from "../incrementMovieAction";

describe("incrementTvShowAction", () => {
  it("should create an action error object", () => {
    const string = "movie";
    const expected = {
      type: "INCREMENT_MOVIE",
      string
    };
    const result = incrementMovieAction("movie");
    expect(result).toEqual(expected);
  });
});
