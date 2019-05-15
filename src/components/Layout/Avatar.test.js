import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Avatar from "./Avatar";

describe("<Avatar />", () => {
  it("renders Avatar", () => {
    const wrapper = shallow(<Avatar username="alex" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
