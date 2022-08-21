import { PlayerHttp } from "./PlayerHttp";
import {GameHttpIn} from "./GameHttpIn";

export interface MeetingHttpIn {
  id: number;
  players?: PlayerHttp[];
  games?: GameHttpIn[];
  startDate: Date;
  endDate: Date;
  minimumPlayers?: number;
  maximumPlayers?: number;
  place: string;
  city: string;
}
