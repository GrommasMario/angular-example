import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import {GridListModule} from "../../../../components/grid-list/grid-list.module";
import {InviteCardModule} from "../../../../components/invite-card/invite-card.module";
import {HttpClientModule} from "@angular/common/http";
import {MeetingsHttpService} from "./meetings.http-service";
import {MeetingsService} from "./meetings.service";
import {MeetingsStore} from "./meetings.store";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MeetingsComponent
  ],
  providers: [
    MeetingsHttpService,
    MeetingsService,
    MeetingsStore,
  ],
  imports: [
    CommonModule,
    GridListModule,
    InviteCardModule,
    HttpClientModule,
    RouterModule
  ]
})
export class MeetingsModule { }
