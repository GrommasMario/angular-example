import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingCardListComponent} from "./meeting-card-list.component";
import {MeetingCardComponent} from "../meeting-card/meeting-card.component";
import {InviteCardModule} from "../invite-card/invite-card.module";
import {GridListModule} from "../grid-list/grid-list.module";



@NgModule({
  declarations: [
    MeetingCardListComponent,
    MeetingCardComponent
  ],
  exports: [
    MeetingCardListComponent,
    MeetingCardComponent
  ],
  imports: [
    CommonModule,
    InviteCardModule,
    GridListModule
  ]
})
export class MeetingCardListModule { }
