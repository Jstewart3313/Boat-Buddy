import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import App from "./App";

describe("App", () => {
  let mockStore;
  let initialState;
  let store;
  beforeEach(() => {
    mockStore = configureMockStore();
    initialState = {
      movies: [],
      music: [],
      tvShow: []
    };
    store = mockStore(initialState);
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<App store={store} />)
    expect(wrapper).toMatchSnapshot();
  });
});
