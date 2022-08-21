import {Component, Input, OnInit} from '@angular/core';
export interface FriendInformation {
  id: number;
  imageUrl: string;
  nickname: string;
  gameAmount: number;
  rating: number;
}


@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {

  @Input()
  isRequest = false;
  @Input()
  name = '';
  @Input()
  friend: FriendInformation = {
    id: 1,
    gameAmount: 0,
    imageUrl: "https://i1.sndcdn.com/avatars-000343516318-241lzu-t240x240.jpg",
    nickname: "Ivan",
    rating: 4.5
  };

  constructor() { }

  ngOnInit(): void {

  }

}
