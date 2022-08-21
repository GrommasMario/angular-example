import {Meeting} from "./Meeting";
import {InviteHttpIn} from "../Interfaces/InviteHttpIn";

export class Invite implements Required<InviteHttpIn> {
  id: number;
  meeting: Meeting;
  date: Date;
  dateDown: Date;

  constructor(invite: InviteHttpIn) {
    this.id = invite.id;
    this.meeting = new Meeting(invite.meeting);
    this.date = invite.date;
    this.dateDown = invite.dateDown;
  }
}
