import * as React from "react";
import { memberAPI } from "../../api/memberAPI";
import {} from "core-js";
import { UserEntity, createDefaultUserEntity } from "../../model/users";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

interface State {
  member: UserEntity;
}

export class UserComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { member: createDefaultUserEntity() };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    memberAPI
      .getMember(this.props.match.params.id)
      .then(member => this.setState({ member }));
  };

  public render() {
    const { member } = this.state;
    return (
      <>
        <div>
          <h2> {member.name}</h2>
          <img
            src={member.avatar_url}
            style={{ maxWidth: "10rem", borderRadius: "100px" }}
          />
          <p>{member.login}</p>
          <p>{member.location}</p>
          <p>{member.company}</p>
          <p>{member.bio}</p>
        </div>
      </>
    );
  }
}
