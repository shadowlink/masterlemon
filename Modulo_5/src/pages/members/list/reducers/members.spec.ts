import deepFreeze from "deep-freeze";
import { actionIds } from "../actions/actionIds";
import { membersReducer, MembersState } from "./";
describe("members/list/reducers/members", () => {
  it(`should return state with members fetched when dispatch UPDATE_LOGIN_ENTITY_FIELD`, () => {
    // Arrange
    const state: MembersState = [{ id: 1, login: "jose", avatar_url: "url" }];
    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload: [{ id: 2, login: "maria", avatar_url: "url" }]
    };

    deepFreeze(state);
    // Act
    const nextState = membersReducer(state, action);
    // Assert
    expect(nextState).toEqual([{ id: 2, login: "maria", avatar_url: "url" }]);
  });

  it(`should return state with members empty when dispatch UPDATE_LOGIN_ENTITY_FIELD`, () => {
    // Arrange
    const state: MembersState = [{ id: 1, login: "jose", avatar_url: "url" }];
    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload: []
    };

    deepFreeze(state);
    // Act
    const nextState = membersReducer(state, action);
    // Assert
    expect(nextState).toEqual([]);
  });

  it(`should return state with null when dispatch UPDATE_LOGIN_ENTITY_FIELD`, () => {
    // Arrange
    const state: MembersState = [{ id: 1, login: "jose", avatar_url: "url" }];
    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload: null
    };

    deepFreeze(state);
    // Act
    const nextState = membersReducer(state, action);
    // Assert
    expect(nextState).toEqual(null);
  });
});
