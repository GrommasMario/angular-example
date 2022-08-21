import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InvitesComponent } from './invites.component';
import { GridListModule } from '../../../../components/grid-list/grid-list.module';
import { InviteCardModule } from '../../../../components/invite-card/invite-card.module';
import {
    IInvitesHttpService,
    InvitesHttpService,
} from './invites.http-service';
import { MeetingsModule } from '../meetings/meetings.module';
import { InvitesStore } from './invites.store';
import { InvitesService } from './invites.service';
import { environment } from '../../../../../environments/environment';
import { InvitesHttpMock } from './invites.http-mock';

@NgModule({
    declarations: [InvitesComponent],
    providers: [
        {
            provide: InvitesHttpService,
            useFactory: (httpClient: HttpClient): IInvitesHttpService => {
                if (environment.mockEnable) return new InvitesHttpMock();

                return new InvitesHttpService(httpClient);
            },
        },
        InvitesStore,
        InvitesService,
    ],
    imports: [
        CommonModule,
        GridListModule,
        InviteCardModule,
        MeetingsModule,
        HttpClientModule,
    ],
})
export class InvitesModule {}
