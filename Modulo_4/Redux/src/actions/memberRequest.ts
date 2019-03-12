import { actionsEnums } from "../common/actionsEnums";
import { MemberEntity } from "../model/member";
import { memberAPI } from "../api/member";

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  };
};

export const memberRequest = (organizationName: string) => dispatcher => {
  const promise = memberAPI.getAllMembers(organizationName);

  promise.then(data => dispatcher(memberRequestCompleted(data)));

  return promise;
};

export const updateOrganizationField = (organizationName: string) => {
  return {
    type: actionsEnums.UPDATE_ORGANIZATION_FIELD,
    payload: organizationName
  };
};
