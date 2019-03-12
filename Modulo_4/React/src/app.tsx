import * as React from "react";
import { MembersTableComponent } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserComponent } from "./components/user/user.component";

interface Props {}

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MembersTableComponent} />
          <Route path="/user/:id" component={UserComponent} />
        </Switch>
      </Router>
    );
  }
}
