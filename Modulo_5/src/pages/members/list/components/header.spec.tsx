import * as React from "react";
import { shallow } from "enzyme";
import { Header } from "./header";

describe("members/list/components/header tests", () => {
  it("should render header", () => {

    // Act
    const component = shallow(<Header />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
