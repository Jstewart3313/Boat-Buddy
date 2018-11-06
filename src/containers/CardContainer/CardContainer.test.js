import React from "react";
import {
  CardContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./CardContainer";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import * as mock from "../../util/mocks";
import { movieAction } from "../../actionCreators/movie";
import { musicAction } from "../../actionCreators/music";
import { tvShowAction } from "../../actionCreators/tvShow";

describe("CardContainer", () => {
  it("should match the snapshop", () => {
    const mockStore = configureMockStore();
    const initialState = {
      movies: [{ key: 1 }, { key: 2 }],
      music: [{ key: 3 }, { key: 4 }],
      TvShow: [{ key: 5 }, { key: 6 }]
    };
    const store = mockStore(initialState);
    let wrapper = shallow(
      <CardContainer
        movies={[{key:1 }, {key:2 }]}
        music={[{key:3 }, {key:4 }]}
        tvShow={[{key:5 }, {key:6 }]}
        store={store}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
describe("mapStateToProps", () => {
  it("should return the expected object", () => {
    const expected = {
      movies: [
        {
          name: "who knows",
          title: "another title",
          Link: "www.Link.com"
        }
      ],
      music: [
        {
          name: "who knows",
          title: "another title",
          Link: "www.Link.com"
        }
      ],
      tvShow: [
        {
          name: "who knows",
          title: "another title",
          Link: "www.Link.com"
        }
      ]
    };
    expect(mapStateToProps(mock.mockState)).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should dispatch when using a function in mDTP", () => {
    const mockDispatch = jest.fn();
    const movieActionToDispatch = movieAction(mock.cleanData);
    const musicActionToDispatch = musicAction(mock.cleanData);
    const tvShowActionToDispatch = tvShowAction(mock.cleanData);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.onLoadTvShow(mock.cleanData);
    mappedProps.onLoadMusic(mock.cleanData);
    mappedProps.onLoadMovies(mock.cleanData);

    expect(mockDispatch).toBeCalledWith(movieActionToDispatch);
    expect(mockDispatch).toBeCalledWith(musicActionToDispatch);
    expect(mockDispatch).toBeCalledWith(tvShowActionToDispatch);
  });
});
