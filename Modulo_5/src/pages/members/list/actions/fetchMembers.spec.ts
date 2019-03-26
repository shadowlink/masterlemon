import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import * as apiMember from "../../../../rest-api/api/member";
import { Member } from "../../../../rest-api/model";
import { actionIds } from "./actionIds";
import { fetchMembers } from "./fetchMembers";

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe("members/list/actions/fetchMembers", () => {
  it("should call to apiMember.fetchMembers", done => {
    // Arrange
    const fetchMembersStub = jest
      .spyOn(apiMember, "fetchMembers")
      .mockImplementation(() => Promise.resolve([]));

    // Act
    const store = getMockStore();
    store.dispatch<any>(fetchMembers()).then(() => {
      // Assert
      expect(fetchMembersStub).toHaveBeenCalled();
      done();
    });
  });

  it(`should dispatch UPDATE_MEMBERS and get payload with members entity`, done => {
    // Arrange
    const members: Member[] = [
      {
        id: 0,
        login: "juan",
        avatar_url: "avatar"
      }
    ];

    const fetchMembersStub = jest
      .spyOn(apiMember, "fetchMembers")
      .mockImplementation(() => Promise.resolve(members));

    // Act
    const store = getMockStore();
    store.dispatch<any>(fetchMembers()).then(() => {
      // Assert
      const expectedAction = store.getActions()[0];
      expect(expectedAction.type).toEqual(actionIds.UPDATE_MEMBERS);
      expect(expectedAction.payload).toEqual(members);
      done();
    });
  });
});
