import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Player } from '../../models/Player';
import { User } from '../../models/User';

@Injectable()
export class SignStore {
    private readonly user = new BehaviorSubject<Player & User>({
        id: 0,
        nickname: '',
        email: '',
        isInitiator: false,
        gameAmount: 0,
        rating: 0,
        avatar: '',
    });

    private readonly user$ = this.user.asObservable();

    getUser() {
        return this.user$;
    }

    pathUser(userData: Partial<Player & User>) {
        this.user.next({ ...this.user.value, ...userData });
    }
}
