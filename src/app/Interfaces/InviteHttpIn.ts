import {MeetingHttpIn} from "./MeetingHttpIn";

export interface InviteHttpIn {
  id: number;
  meeting: MeetingHttpIn;
  date: Date;
  dateDown: Date
}
