import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingSearchNewComponent} from "./meeting-search-new.component";
import {GameCardModule} from "../game-card/game-card.module";
import {ModalModule} from "../modal/modal.module";
import {MeetingPreviewImageModule} from "../meeting-preview-image/meeting-preview-image.module";



@NgModule({
  declarations: [
    MeetingSearchNewComponent,
  ],
  exports: [
  ],
  imports: [
    MeetingPreviewImageModule,
    CommonModule,
    GameCardModule,
    ModalModule
  ]
})
export class MeetingSearchNewModule { }
