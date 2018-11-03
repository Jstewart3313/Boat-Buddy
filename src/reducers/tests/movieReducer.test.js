import { movieReducer } from "../movieReducer";

describe("movieReducer", () => {
  it("should return initial state if type does not match", () => {
    const movie = [{
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }];
    const action = {
      type: "DUMMY_TYPE",
      movie
    };
    const expected = [];
    const result = movieReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should return a new state if the type matches", () => {
    const movies = [{
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }];
    const action = {
      type: 'MOVIE',
      movies
    };
    const expected = movies;
    const result = movieReducer(undefined,action);
    expect(result).toEqual(expected);
  });

  it('should always update state if type matches', () => {
    const movies =[{
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }];
    const expected = movies;
    const mockState = [
      {
        name: "initialName",
        title: "initialTitle",
        teaser: "initialTeaser",
        Link: "www.InitialLink.com"
      }
    ];
    const action = {
      type:'MOVIE',
      movies
    }
    const result = movieReducer(mockState, action);
    expect(result).toEqual(expected);
  })
});
