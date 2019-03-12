export interface UserEntity {
  login: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
}

export const createDefaultUserEntity = () => ({
  login: "",
  name: "",
  company: "",
  location: "",
  email: "",
  bio: ""
});
