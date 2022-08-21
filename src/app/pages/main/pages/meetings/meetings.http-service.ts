import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractHttpService } from '../../../../http-services/AbstractHttpService';
import { IMeetingHttpIn } from '../../../../Interfaces/IMeetingHttpIn';

export interface IMeetingsHttpService {
    getList(): Observable<Array<IMeetingHttpIn>>;
    cancelMeeting(id: number): Observable<IMeetingHttpIn>;
}

@Injectable()
export class MeetingsHttpService
    extends AbstractHttpService
    implements IMeetingsHttpService
{
    constructor(protected readonly httpClient: HttpClient) {
        super();
    }

    getList() {
        return this.httpClient.get<IMeetingHttpIn[]>('');
    }

    cancelMeeting(id: number) {
        return this.httpClient.delete<IMeetingHttpIn>('');
    }
}
