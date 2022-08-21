import { Component, OnInit } from '@angular/core';
import { MeetingsService } from './meetings.service';

@Component({
    selector: 'app-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
    constructor(readonly meetingService: MeetingsService) {}

    ngOnInit(): void {}

    toCancel(id: number) {
        this.meetingService.cancelMeeting(id);
    }
}
