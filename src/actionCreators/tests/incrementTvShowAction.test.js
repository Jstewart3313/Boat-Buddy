import { incrementTvShowAction } from "../incrementTvShowAction";

describe("incrementTvShowAction", () => {
  it("should create an action error object", () => {
    const string = "show";
    const expected = {
      type: "INCREMENT_TVSHOW",
      string
    };
    const result = incrementTvShowAction("show");
    expect(result).toEqual(expected);
  });
});
