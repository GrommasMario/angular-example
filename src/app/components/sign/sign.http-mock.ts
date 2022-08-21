import {Player} from "../../models/Player";
import {User} from "../../models/User";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class SignHttpMock {
  users: (User & Player & {password: string})[] = [
    {id: 1, rating: 4.5, nickname: 'tgs', isInitiator: true, email: 'tgs@mail.ru', gameAmount: 12, password: '00000000'},
  ]

  default(data: User){
    return new Observable<User & Player>(subscriber => {
      subscriber.next({ ...data, id: 10, rating: 4, isInitiator: true, email: 'test@mail.ru', gameAmount: 0})
    })
  }

  find(email: string, password: string){
    return new Observable<User & Player>(subscriber => {
      const user = this.users.find(u => u.email === email && u.password === password);
      if(!user){
        subscriber.error('Not Found');
      }

      subscriber.next(user);
    })
  }
}
