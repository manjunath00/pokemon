import { mount } from "enzyme";

import Pokemon from "./PokedoxApi";

it("tests the api", () => {
  const apiResult = Pokemon()[0];
  expect(apiResult).toHaveProperty("id");
});
