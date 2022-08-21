import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitesComponent } from './invites.component';
import {GridListModule} from "../../../../components/grid-list/grid-list.module";
import {InviteCardModule} from "../../../../components/invite-card/invite-card.module";
import {InvitesHttpService} from "./invites.http-service";
import {HttpClientModule} from "@angular/common/http";
import {MeetingsModule} from "../meetings/meetings.module";
import {InvitesStore} from "./invites.store";
import {InvitesService} from "./invites.service";



@NgModule({
  declarations: [
    InvitesComponent
  ],
  providers: [
    InvitesHttpService,
    InvitesStore,
    InvitesService
  ],
  imports: [
    CommonModule,
    GridListModule,
    InviteCardModule,
    MeetingsModule,
    HttpClientModule
  ]
})
export class InvitesModule { }
