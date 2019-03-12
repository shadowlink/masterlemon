import * as React from "react";
import { MemberEntity } from "../../model/member";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

export const MemberRow = (props: { member: MemberEntity }) => (
  <Link to={`/user/${props.member.login}`}>
    <Card style={{ marginTop: "1em" }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <img
          src={props.member.avatar_url}
          style={{ maxWidth: "10rem", borderRadius: "100px" }}
        />
        <span style={{ fontSize: "2em", fontWeight: "bold" }}>
          {props.member.id}
        </span>
        <span style={{ fontSize: "2em", fontWeight: "bold" }}>
          {props.member.login}
        </span>
      </CardContent>
    </Card>
  </Link>
);
