import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {
  MeetingImage,
  MeetingImagePreview,
  MeetingImagePreviewAdapter
} from "./MeetingImagePreviewAdapter";
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-meeting-preview-image',
  templateUrl: './meeting-preview-image.component.html',
  styleUrls: ['./meeting-preview-image.component.scss'],
})
export class MeetingPreviewImageComponent {
  @Input()
  meetingImagePreview: MeetingImagePreview[] = []
}
