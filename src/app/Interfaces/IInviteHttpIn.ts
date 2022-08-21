import { IMeetingHttpIn } from './IMeetingHttpIn';

export interface IInviteHttpIn {
    id: number;
    meeting: IMeetingHttpIn;
    date: Date;
    dateDown: Date;
}
