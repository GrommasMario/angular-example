import {UserHttp} from "../Interfaces/UserHttp";

export class User {
  id!: number;
  nickname!: string;
  email!: string;

  constructor(user: UserHttp) {
    this.id = user.id;
    this.nickname = user.nickname;
    this.email = user.email;
  }
}
