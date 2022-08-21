import {User} from "./User";
import {PlayerHttp} from "../Interfaces/PlayerHttp";

export class Player {
  id!: number;
  nickname!: string;
  isInitiator!: boolean;
  rating!: number;
  gameAmount!: number;


  constructor(player: PlayerHttp) {
    this.id = player.id;
    this.nickname = player.nickname;
    this.isInitiator = player.isInitiator;
    this.rating = player.rating;
    this.gameAmount = player.gameAmount;
  }
}
