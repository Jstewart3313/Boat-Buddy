import { tvShowReducer } from "../tvShowReducer";

describe("tvShowReducer", () => {
  it("should return initial state if type does not match", () => {
    const expected = [];
    const tvShow = {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    };
    const action = {
      type: "DUMMY_TYPE",
      tvShow
    };
    const result = tvShowReducer(undefined, action);
    expect(result).toEqual(expected);
  });
  it("should update state if type matches", () => {
    const tvShow = {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    };
    const expected = tvShow;
    const action = {
      type: "TV_SHOW",
      tvShow
    };
    const result = tvShowReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should always update state with a new string if type matches", () => {
    const tvShow = [
      {
        name: "who knows",
        title: "another title",
        teaser: "another teaser",
        Link: "www.Link.com"
      }
    ];

    const expected = tvShow;

    const mockState = [
      {
        name: "initialName",
        title: "initialTitle",
        teaser: "initialTeaser",
        Link: "www.InitialLink.com"
      }
    ];
    const action = {
      type: 'TV_SHOW',
      tvShow
    }
    const result = tvShowReducer(mockState,action)

    expect(result).toEqual(expected);
  });
});
