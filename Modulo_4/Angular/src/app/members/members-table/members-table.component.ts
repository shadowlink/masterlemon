import { Component } from "@angular/core";

import { MemberEntity } from "../models/member.model";
import { MembersApiService } from "../members-api.service";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  organization: string;

  constructor(private membersApi: MembersApiService) {
    this.organization = "lemoncode";
  }

  loadMembers() {
    this.membersApi
      .getAllMembers(this.organization)
      .subscribe(ms => (this.members = ms));
  }

  onKey(event: any) {
    this.organization = event.target.value;
  }
}
