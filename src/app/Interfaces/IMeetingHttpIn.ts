import { IPlayerHttp } from './IPlayerHttp';
import { IGameHttpIn } from './IGameHttpIn';

export interface IMeetingHttpIn {
    id: number;
    players?: IPlayerHttp[];
    games?: IGameHttpIn[];
    startDate: Date;
    endDate: Date;
    minimumPlayers?: number;
    maximumPlayers?: number;
    place: string;
    city: string;
}
