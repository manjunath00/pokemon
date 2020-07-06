import React from "react";
import { shallow } from "enzyme";

import ProgressBar from "./ProgressBar";

it("Renders the component with two props", () => {
  const type = "Attack";
  const score = 59;
  const component = shallow(<ProgressBar type={type} score={score}/>);
  expect(component).toMatchSnapshot();
});
