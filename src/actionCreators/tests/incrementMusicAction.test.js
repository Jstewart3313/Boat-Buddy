import { incrementMusicAction } from "../incrementMusicAction";

describe("incrementTvShowAction", () => {
  it("should create an action error object", () => {
    const string = "music";
    const expected = {
      type: "INCREMENT_MUSIC",
      string
    };
    const result = incrementMusicAction("music");
    expect(result).toEqual(expected);
  });
});
