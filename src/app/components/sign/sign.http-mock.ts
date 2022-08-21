import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Player } from '../../models/Player';
import { User } from '../../models/User';
import { ISignHttpService } from './sign.http-service';

@Injectable()
export class SignHttpMock implements ISignHttpService {
    users: (User & Player & { password: string })[] = [
        {
            id: 1,
            rating: 4.5,
            nickname: 'tgs',
            isInitiator: true,
            email: 'tgs@mail.ru',
            gameAmount: 12,
            password: '00000000',
            avatar: '',
        },
    ];

    signIn(email: string, password: string): Observable<User & Player> {
        return new Observable<User & Player>((subscriber) => {
            const user = this.users.find(
                (u) => u.email === email && u.password === password,
            );
            if (!user) {
                subscriber.error('Not Found');
            }

            subscriber.next(user);
        });
    }

    signUp(user: User): Observable<User & Player> {
        return new Observable<User & Player>((subscriber) => {
            subscriber.next({
                ...user,
                id: 10,
                rating: 4,
                isInitiator: true,
                gameAmount: 0,
                avatar: '',
            });
        });
    }
}
