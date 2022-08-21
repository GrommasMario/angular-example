import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from "../../models/Meeting";

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.scss']
})
export class MeetingCardComponent implements OnInit {

  @Input()
  meeting!: Meeting;

  constructor() { }

  ngOnInit(): void {
  }

}
