import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MeetingsComponent } from './meetings.component';
import { GridListModule } from '../../../../components/grid-list/grid-list.module';
import { InviteCardModule } from '../../../../components/invite-card/invite-card.module';
import {
    IMeetingsHttpService,
    MeetingsHttpService,
} from './meetings.http-service';
import { MeetingsService } from './meetings.service';
import { MeetingsStore } from './meetings.store';
import { environment } from '../../../../../environments/environment';
import { MeetingsHttpMock } from './meetings.http-mock';

@NgModule({
    declarations: [MeetingsComponent],
    providers: [
        {
            provide: MeetingsHttpService,
            useFactory: (httpClient: HttpClient): IMeetingsHttpService => {
                if (environment.mockEnable) {
                    return new MeetingsHttpMock();
                }

                return new MeetingsHttpService(httpClient);
            },
        },
        MeetingsService,
        MeetingsStore,
    ],
    imports: [
        CommonModule,
        GridListModule,
        InviteCardModule,
        HttpClientModule,
        RouterModule,
    ],
})
export class MeetingsModule {}
