import * as React from "react";
import { MemberTableComponent } from "./components/memberTable";
import { MemberEntity } from "../../model/member";
import { FilterEntity } from "../../model/filter";

interface Props {
  members: Array<MemberEntity>;
  organizationFilter: FilterEntity;
  loadMembers: (organizationName: string) => any;
  updateOrganizationField: (organizationName: string) => any;
}

export class MemberAreaComponent extends React.Component<Props> {
  onChange = event => {
    this.props.updateOrganizationField(event.target.value);
  };

  render() {
    return (
      <div>
        <MemberTableComponent members={this.props.members} />
        <br />
        <input
          type="text"
          value={this.props.organizationFilter.organizationField}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="load"
          className="btn btn-default"
          onClick={() =>
            this.props.loadMembers(
              this.props.organizationFilter.organizationField
            )
          }
        />
      </div>
    );
  }
}
