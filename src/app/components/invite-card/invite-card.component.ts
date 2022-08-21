import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import { Meeting } from '../../models/Meeting';
import {
    IMeetingImagePreview,
    MeetingImagePreviewAdapter,
} from '../meeting-preview-image/MeetingImagePreviewAdapter';

@Component({
    selector: 'app-invite-card',
    templateUrl: './invite-card.component.html',
    styleUrls: ['./invite-card.component.scss'],
})
export class InviteCardComponent implements OnInit, OnChanges {
    hover = false;

    @Input()
    inviteId?: number;

    @Input()
    meeting!: Meeting;

    meetingImagePreview!: IMeetingImagePreview[];

    @Output()
    onApprove = new EventEmitter<number>();

    @Output()
    onDecline = new EventEmitter<number | undefined>();

    ngOnInit(): void {}

    @HostListener('mouseenter')
    onMouseEnter() {
        this.hover = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.hover = false;
    }

    ngOnChanges(): void {
        if (this.meeting) {
            this.meetingImagePreview = new MeetingImagePreviewAdapter(
                this.meeting.games,
            ).adaptToPreview(200, 20, 70, 20, 1, 0.18, 3);
        }
    }

    toApprove(id: number) {
        this.onApprove.emit(id);
    }

    toDecline(id?: number) {
        this.onDecline.emit(id);
    }
}
