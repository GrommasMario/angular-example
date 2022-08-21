import { IGameHttpIn } from '../Interfaces/IGameHttpIn';

export class Game {
    title: string;

    description: string;

    playerMinimum: number;

    playerMaximum: number;

    duration: number; // in minutes

    rating: number;

    imageUrl: string;

    constructor(game: IGameHttpIn) {
        this.title = game.title;
        this.description = game.description ?? '';
        this.playerMinimum = game.playerMinimum ?? 0;
        this.playerMaximum = game.playerMaximum ?? 0;
        this.duration = game.duration ?? 0; // in minutes
        this.rating = game.rating ?? 0;
        this.imageUrl = game.imageUrl ?? '';
    }
}
