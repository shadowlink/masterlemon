import { connect } from "react-redux";
import {
  memberRequest,
  updateOrganizationField
} from "../../actions/memberRequest";
import { MemberAreaComponent } from "./memberArea";
import { State } from "../../reducers";

const mapStateToProps = (state: State) => {
  return {
    members: state.memberReducer,
    organizationFilter: state.memberFilterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMembers: (organizationName: string) => {
      return dispatch(memberRequest(organizationName));
    },
    updateOrganizationField: (organizationName: string) => {
      return dispatch(updateOrganizationField(organizationName));
    }
  };
};

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
