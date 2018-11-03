import { musicReducer } from "../musicReducer";

describe("musicReducer", () => {
  it("should return initial state if type does not match", () => {
    const music = {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    };

    const action = {
      type: 'DUMMY_TYPE',
      music
    }
    const expected = [];
    const result = musicReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should return a new state if the type matches", () => {
    const music = [
      {
        name: "who knows",
        title: "another title",
        teaser: "another teaser",
        Link: "www.Link.com"
      }
    ];
    const action = {
      type: "MUSIC",
      music: music
    };
    const expected = music;
    const result = musicReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should always update state if type matches", () => {
    const music = [
      {
        name: "who knows",
        title: "another title",
        teaser: "another teaser",
        Link: "www.Link.com"
      }
    ];
    const expected = music;
    const mockState = [
      {
        name: "initialName",
        title: "initialTitle",
        teaser: "initialTeaser",
        Link: "www.InitialLink.com"
      }
    ];
    const action = {
      type: "MUSIC",
      music: music
    };
    const result = musicReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
