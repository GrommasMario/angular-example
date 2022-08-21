import { IPlayerHttp } from '../Interfaces/IPlayerHttp';

export class Player {
    id: number;

    nickname: string;

    isInitiator: boolean;

    rating: number;

    gameAmount: number;

    avatar: string;

    constructor(player: IPlayerHttp) {
        this.id = player.id;
        this.nickname = player.nickname;
        this.isInitiator = player.isInitiator;
        this.rating = player.rating;
        this.gameAmount = player.gameAmount;
        this.avatar = player.avatar;
    }
}
