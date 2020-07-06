import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

it("Renders static component with no props", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
