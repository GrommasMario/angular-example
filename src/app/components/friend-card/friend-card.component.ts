import { Component, Input } from '@angular/core';

export interface IFriendInformation {
    id: number;
    imageUrl: string;
    nickname: string;
    gameAmount: number;
    rating: number;
}

@Component({
    selector: 'app-friend-card',
    templateUrl: './friend-card.component.html',
    styleUrls: ['./friend-card.component.scss'],
})
export class FriendCardComponent {
    @Input()
    isRequest = false;

    @Input()
    name = '';

    @Input()
    friend: IFriendInformation = {
        id: 1,
        gameAmount: 0,
        imageUrl:
            'https://i1.sndcdn.com/avatars-000343516318-241lzu-t240x240.jpg',
        nickname: 'Ivan',
        rating: 4.5,
    };
}
