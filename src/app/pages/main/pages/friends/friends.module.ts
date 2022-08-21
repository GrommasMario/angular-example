import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import {GridListModule} from "../../../../components/grid-list/grid-list.module";
import {FriendCardModule} from "../../../../components/friend-card/friend-card.module";



@NgModule({
  declarations: [
    FriendsComponent
  ],
  imports: [
    CommonModule,
    GridListModule,
    FriendCardModule
  ]
})
export class FriendsModule { }
