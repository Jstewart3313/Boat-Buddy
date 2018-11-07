import React from "react";
import { shallow } from "enzyme";
import { Summary, mapStateToProps } from "./summary";
import * as mocks from "../../util/mocks";

describe("Summary", () => {
  it("should match the snapshot", () => {
    let wrapper = shallow(<Summary />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should return the expected object", () => {
    const expected = {
      movieCount: 0,
      tvShowCount: 0,
      musicCount: 0
    };
    expect(mapStateToProps(mocks.mockState)).toEqual(expected);
  });
});
