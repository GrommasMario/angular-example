import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractHttpService } from '../../http-services/AbstractHttpService';
import { User } from '../../models/User';
import { Player } from '../../models/Player';

export interface ISignHttpService {
    signIn(email: string, password: string): Observable<User & Player>;
    signUp(user: User): Observable<User & Player>;
}

@Injectable()
export class SignHttpService
    extends AbstractHttpService
    implements ISignHttpService
{
    constructor(readonly httpClient: HttpClient) {
        super();
    }

    signIn(email: string, password: string) {
        return this.httpClient.get<User & Player>('', {
            headers: { authorization: `${email}:${password}` },
        });
    }

    signUp(user: User) {
        return this.httpClient.post<User & Player>('', user);
    }
}
