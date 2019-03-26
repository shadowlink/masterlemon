import * as React from "react";
import { shallow } from "enzyme";
import { Row } from "./row";
import { Member } from "../viewModel";

describe("members/list/components/row tests", () => {
  it("should render row", () => {
    const member: Member = {
      avatarUrl: "url",
      id: 0,
      name: "felipe"
    };

    // Act
    const component = shallow(<Row member={member} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
