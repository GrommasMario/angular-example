import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Meeting } from '../../models/Meeting';

@Component({
    selector: 'app-meeting-card-list',
    templateUrl: './meeting-card-list.component.html',
    styleUrls: ['./meeting-card-list.component.scss'],
})
export class MeetingCardListComponent implements OnInit {
    @Input()
    maxElement = 10;

    meetings: Meeting[] = [];

    ngOnInit(): void {
        this.meetings = new Array(this.maxElement).fill(
            new Meeting({
                id: 2,
                city: 'Таганрог',
                place: 'Хука',

                startDate: moment().toDate(),
                endDate: moment().toDate(),
            }),
        );
    }
}
