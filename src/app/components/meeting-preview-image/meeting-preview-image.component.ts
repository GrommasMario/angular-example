import { Component, Input } from '@angular/core';
import { IMeetingImagePreview } from './MeetingImagePreviewAdapter';

@Component({
    selector: 'app-meeting-preview-image',
    templateUrl: './meeting-preview-image.component.html',
    styleUrls: ['./meeting-preview-image.component.scss'],
})
export class MeetingPreviewImageComponent {
    @Input()
    meetingImagePreview: IMeetingImagePreview[] = [];
}
