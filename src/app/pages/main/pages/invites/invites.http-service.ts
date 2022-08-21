import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInviteHttpIn } from '../../../../Interfaces/IInviteHttpIn';
import { AbstractHttpService } from '../../../../http-services/AbstractHttpService';

export interface IInvitesHttpService {
    getList(): Observable<Array<IInviteHttpIn>>;
    approveInvite(id: number): Observable<IInviteHttpIn>;
    declineInvite(id: number): Observable<IInviteHttpIn>;
}

@Injectable()
export class InvitesHttpService
    extends AbstractHttpService
    implements IInvitesHttpService
{
    constructor(readonly httpClient: HttpClient) {
        super();
    }

    getList() {
        return this.httpClient.get<IInviteHttpIn[]>('');
    }

    approveInvite(id: number) {
        return this.httpClient.put<IInviteHttpIn>('', {});
    }

    declineInvite(id: number) {
        return this.httpClient.delete<IInviteHttpIn>('', {});
    }
}
