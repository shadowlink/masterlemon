import * as React from "react";
import { shallow } from "enzyme";
import { Body } from "./body";
import { Member } from "../viewModel";

describe("members/list/components/body tests", () => {
  it("should render body", () => {
    const members: Member[] = [
      {
        avatarUrl: "url",
        id: 0,
        name: "felipe"
      }
    ];

    // Act
    const component = shallow(<Body members={members} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
