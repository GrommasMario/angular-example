import { Injectable } from '@angular/core';
import { MeetingsHttpService } from './meetings.http-service';
import { MeetingsStore } from './meetings.store';
import { IMeetingHttpIn } from '../../../../Interfaces/IMeetingHttpIn';
import { Meeting } from '../../../../models/Meeting';

@Injectable({ providedIn: 'root' })
export class MeetingsService {
    constructor(
        readonly meetingHttpService: MeetingsHttpService,
        readonly meetingStoreService: MeetingsStore,
    ) {
        this.init();
    }

    protected init() {
        this.meetingHttpService.getList().subscribe((r) => {
            this.meetingStoreService.fillList(
                r.map((meetingHttp) => new Meeting(meetingHttp)),
            );
        });
    }

    addToStore(meeting: IMeetingHttpIn) {
        this.meetingStoreService.addToStoreList(new Meeting(meeting));
    }

    getList() {
        return this.meetingStoreService.getList();
    }

    cancelMeeting(id: number) {
        this.meetingHttpService.cancelMeeting(id).subscribe(() => {
            this.meetingStoreService.dropFromStoreList(id);
        });
    }
}
