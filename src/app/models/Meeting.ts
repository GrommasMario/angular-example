import { Game } from './Game';
import { Player } from './Player';
import {
    MeetingPlayerCalculator,
    IMeetingPlayersAmount,
} from './MeetingPlayerCalculator';
import { IMeetingHttpIn } from '../Interfaces/IMeetingHttpIn';

export class Meeting implements Required<IMeetingHttpIn> {
    id: number;

    players: Player[];

    games: Game[];

    startDate: Date;

    endDate: Date;

    playersAmount: IMeetingPlayersAmount;

    place: string;

    city: string;

    maximumPlayers: number;

    minimumPlayers: number;

    constructor(meeting: IMeetingHttpIn) {
        this.id = meeting.id;
        this.players = meeting.players?.length
            ? meeting.players.map((playerHttpIn) => new Player(playerHttpIn))
            : [];
        this.games = meeting.games?.length
            ? meeting.games.map((gameHttpIn) => new Game(gameHttpIn))
            : [];
        this.endDate = meeting.endDate;
        this.startDate = meeting.startDate;
        this.minimumPlayers = meeting.minimumPlayers ?? 0;
        this.maximumPlayers = meeting.minimumPlayers ?? 0;
        this.place = meeting.place;
        this.city = meeting.city;

        this.playersAmount = new MeetingPlayerCalculator(this.games, {
            maximum: meeting.maximumPlayers,
            minimum: meeting.minimumPlayers,
        }).players;
    }

    get initiator(): Player | null {
        for (const player of this.players) {
            if (player.isInitiator) return player;
        }

        return null;
    }
}
