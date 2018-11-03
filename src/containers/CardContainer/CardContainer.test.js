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
      movies: [{id:1}, {id:2}],
      music: [{id:3}, {id:4}],
      TvShow: [{id:5}, {id:6}]
    };
    const store = mockStore(initialState);
    let wrapper = shallow(<CardContainer 
      movies={[{}, {}]}
      music={[{},{}]}
      tvShow={[{},{}]}
      store={store}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe('mapStateToProps', () => {
  it('should return the expected object', () => {
    const expected = {
      movies: [
        {
          name: "who knows",
          title: "another title",
          teaser: "another teaser",
          Link: "www.Link.com"
        }
      ],
      music: [
        {
          name: "who knows",
          title: "another title",
          teaser: "another teaser",
          Link: "www.Link.com"
        }
      ],
      tvShow: [
        {
          name: "who knows",
          title: "another title",
          teaser: "another teaser",
          Link: "www.Link.com"
        }
      ]
    }
    expect(mapStateToProps(mock.mockState)).toEqual(expected)
  })
})