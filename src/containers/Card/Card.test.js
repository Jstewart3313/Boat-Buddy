import React from "react";
import { shallow } from "enzyme";
import { Card, mapDispatchToProps } from "./Card";


import { incrementMovieAction } from "../../actionCreators/incrementMovieAction";
import { incrementMusicAction } from "../../actionCreators/incrementMusicAction";
import { incrementTvShowAction } from "../../actionCreators/incrementTvShowAction";

describe("Card", () => {
  it("should match the snapshot", () => {
    let wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapDispatchToProps", () => {
  it("should dispatch when using a function in mDTP", () => {
    const mockDispatch = jest.fn();
    const mockMusicString = "music";
    const mockMovieString = "movie";
    const mockTvShowString = "show";
    const movieActionToDispatch = incrementMovieAction(mockMovieString);
    const musicActionToDispatch = incrementMusicAction(mockMusicString);
    const tvShowActionToDispatch = incrementTvShowAction(mockTvShowString);

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.incrementMovie(mockMovieString);
    mappedProps.incrementMusic(mockMusicString);
    mappedProps.incrementTvShow(mockTvShowString);

    expect(mockDispatch).toBeCalledWith(movieActionToDispatch);
    expect(mockDispatch).toBeCalledWith(musicActionToDispatch);
    expect(mockDispatch).toBeCalledWith(tvShowActionToDispatch);
  });
});
