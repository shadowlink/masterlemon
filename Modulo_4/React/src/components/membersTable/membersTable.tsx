import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import {} from "core-js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {}

// we define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>;
  organization: string;
}

// nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { members: [], organization: "lemoncode" };
  }

  loadMembers = () => {
    memberAPI
      .getAllMembers(this.state.organization)
      .then(members => this.setState({ members: members }));
  };

  onChangeOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ organization: event.target.value });
  };

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>

        <TextField
          id="organization"
          label="Organización"
          value={this.state.organization}
          onChange={this.onChangeOrganization}
          margin="normal"
        />

        <Button variant={"outlined"} onClick={this.loadMembers}>
          Load
        </Button>

        {this.state.members.map((member: MemberEntity) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </div>
    );
  }
}
