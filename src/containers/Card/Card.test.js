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

  // it("should call handleClick on click of done btn", () => {
  //   const expected = "true";
  //   let wrapper = shallow(<Card />);
  //   const spy = jest.spyOn(wrapper.instance(), "handleClick");
  //   wrapper.instance().forceUpdate();
  //   wrapper.find(".done").simulate("click")
  //   expect(spy).toHaveBeenCalled();
  //   expect(wrapper.state("done")).toEqual(expected);
  // });
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
