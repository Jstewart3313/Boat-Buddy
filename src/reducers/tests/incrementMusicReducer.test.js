import { incrementMusicReducer } from "../incrementMusicReducer";

describe("incrementMusicReducer", () => {
  it("should return default state if type does not match", () => {
    const expected = 0;
    const action = {
      type: "DUMMY_TYPE",
      music: "music"
    };
    const result = incrementMusicReducer(undefined, action);
    expect(result).toEqual(expected);
  });
  it("should update state if type matches", () => {
    const expected = 1;
    const action = {
      type: "INCREMENT_MUSIC",
      music: "music"
    };
    const result = incrementMusicReducer(undefined, action);
    expect(result).toEqual(expected);
  });
  it("should always update state if the type matches", () => {
    const expected = 2;
    const action = {
      type: "INCREMENT_MUSIC",
      music: "music"
    };
    const mockState = 1;
    const result = incrementMusicReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
