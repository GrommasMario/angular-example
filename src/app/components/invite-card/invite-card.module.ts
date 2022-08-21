import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteCardComponent } from './invite-card.component';
import { MeetingSearchNewModule } from '../meeting-seacrh-new/meeting-search-new.module';
import { MeetingPreviewImageModule } from '../meeting-preview-image/meeting-preview-image.module';
import { InvitesHttpService } from '../../pages/main/pages/invites/invites.http-service';

@NgModule({
    declarations: [InviteCardComponent],
    exports: [InviteCardComponent],
    providers: [InvitesHttpService],
    imports: [CommonModule, MeetingSearchNewModule, MeetingPreviewImageModule],
})
export class InviteCardModule {}
