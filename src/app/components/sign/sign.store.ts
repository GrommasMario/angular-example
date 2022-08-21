import {BehaviorSubject} from "rxjs";
import {Player} from "../../models/Player";
import {User} from "../../models/User";
import {Injectable} from "@angular/core";

@Injectable()
export class SignStore {
  private readonly user = new BehaviorSubject<Player & User>({
    id: 0,
    nickname: "",
    email: '',
    isInitiator: false,
    gameAmount: 0,
    rating: 0
  })
  private readonly user$ = this.user.asObservable();

  getUser(){
    return this.user$;
  }

  pathUser(userData: Partial<Player & User>){
    this.user.next({...this.user.value, ...userData})
  }
}
