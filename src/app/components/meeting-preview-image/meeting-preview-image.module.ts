import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingPreviewImageComponent } from './meeting-preview-image.component';

@NgModule({
    declarations: [MeetingPreviewImageComponent],
    exports: [MeetingPreviewImageComponent],
    imports: [CommonModule],
})
export class MeetingPreviewImageModule {}
