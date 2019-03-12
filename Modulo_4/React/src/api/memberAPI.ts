import { MemberEntity, createDefaultMemberEntity } from "../model/member";
import { UserEntity, createDefaultUserEntity } from "../model/users";

class MemberAPI {
  // Just return a copy of the mock data
  getAllMembers(organizationName: string): Promise<MemberEntity[]> {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveMembers(data));
  }

  getMember(username: string): Promise<UserEntity> {
    const gitHubUsersUrl: string = `https://api.github.com/users/${username}`;

    return fetch(gitHubUsersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveUser(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMembers(data: any): Promise<MemberEntity[]> {
    const members = data.map(gitHubMember => {
      var member: MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });

    return Promise.resolve(members);
  }

  private resolveUser(data: any): Promise<UserEntity> {
    var member: UserEntity = createDefaultUserEntity();

    member.bio = data.id;
    member.company = data.login;
    member.email = data.avatar_url;
    member.location = data.avatar_url;
    member.login = data.avatar_url;
    member.name = data.avatar_url;

    return Promise.resolve(member);
  }
}

export const memberAPI = new MemberAPI();
