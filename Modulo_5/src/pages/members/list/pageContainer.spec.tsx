import * as React from "react";
import { shallow } from "enzyme";
import { MemberListPageContainer } from "./pageContainer";
import configureStore from "redux-mock-store";
import * as fetchMemberActions from "./actions/fetchMembers";
import { State } from "../../reducers";
import * as mappers from "./mappers";

const getMockStore = configureStore();

describe("members/list/pageContainer tests", () => {
  it("should render as expected passing state", () => {
    // Arrange
    const state = {
      members: [
        {
          avatar_url: "",
          id: 1,
          login: ""
        }
      ]
    } as State;
    const store = getMockStore(state);

    // Act
    const component = shallow(<MemberListPageContainer />, {
      context: { store }
    });

    // Assert
    expect(component).toMatchSnapshot();
  });

  it("should call to mapMemberListModelToVM when render component", () => {
    // Arrange
    const state = {
      members: [
        {
          avatar_url: "",
          id: 1,
          login: ""
        }
      ]
    } as State;
    const store = getMockStore(state);
    const mapMemberListModelToVMStub = jest
      .spyOn(mappers, "mapMemberListModelToVM")
      .mockReturnValue([
        { id: 1, name: "", avatarUrl: "" }
      ]);
    // Act
    const component = shallow(<MemberListPageContainer />, {
      context: { store }
    });
    // Assert
    expect(mapMemberListModelToVMStub).toHaveBeenCalledWith(state.members);
  });
});
