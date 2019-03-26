import * as React from "react";
import { shallow } from "enzyme";
import { Table } from "./table";
import { Member } from "../viewModel";

describe("members/list/components/table tests", () => {
  it("should render table", () => {
    const members: Member[] = [
      {
        avatarUrl: "url",
        id: 0,
        name: "felipe"
      }
    ];

    // Act
    const component = shallow(<Table members={members} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
