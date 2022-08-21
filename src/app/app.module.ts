import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from "./pages/main/main.module";
import { ButtonComponent } from './components/button/button.component';
import {MeetingCardListModule} from "./components/meeting-card-list/meeting-card-list.module";
import {MeetingSearchNewModule} from "./components/meeting-seacrh-new/meeting-search-new.module";
import {InvitesModule} from "./pages/main/pages/invites/invites.module";
import {FriendsModule} from "./pages/main/pages/friends/friends.module";
import {MeetingsModule} from "./pages/main/pages/meetings/meetings.module";
import {SignModule} from "./components/sign/sign.module";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        MeetingCardListModule,
        MeetingSearchNewModule,
      InvitesModule,
      FriendsModule,
      MeetingsModule,
      SignModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
