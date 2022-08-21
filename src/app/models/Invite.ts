import { Meeting } from './Meeting';
import { IInviteHttpIn } from '../Interfaces/IInviteHttpIn';

export class Invite implements Required<IInviteHttpIn> {
    id: number;

    meeting: Meeting;

    date: Date;

    dateDown: Date;

    constructor(invite: IInviteHttpIn) {
        this.id = invite.id;
        this.meeting = new Meeting(invite.meeting);
        this.date = invite.date;
        this.dateDown = invite.dateDown;
    }
}
