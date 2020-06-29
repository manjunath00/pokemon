import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

it("Renders button component with props ", () => {
  const data = "submit";
  const component = shallow(<Button data={data} />);

  expect(component).toMatchSnapshot();
});
