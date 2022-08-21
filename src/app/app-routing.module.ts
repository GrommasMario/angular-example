import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MeetingCardListComponent } from './components/meeting-card-list/meeting-card-list.component';
import { MeetingSearchNewComponent } from './components/meeting-seacrh-new/meeting-search-new.component';
import { InvitesComponent } from './pages/main/pages/invites/invites.component';
import { FriendsComponent } from './pages/main/pages/friends/friends.component';
import { MeetingsComponent } from './pages/main/pages/meetings/meetings.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/sign' },
    {
        path: 'app',
        component: MainComponent,
        children: [
            {
                path: 'list',
                component: MeetingCardListComponent,
            },
            {
                path: 'meetings/new',
                component: MeetingSearchNewComponent,
            },
            {
                path: 'meetings',
                component: MeetingsComponent,
            },
            {
                path: 'invites',
                component: InvitesComponent,
            },
            {
                path: 'friends',
                component: FriendsComponent,
            },
        ],
    },
    {
        path: 'sign',
        component: SignComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
