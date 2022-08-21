import {SignStore} from "./sign.store";
import {SignHttpService} from "./sign.http-service";
import {User} from "../../models/User";
import {Injectable} from "@angular/core";
import {map} from "rxjs";

@Injectable({providedIn: 'root'})
export class SignService {
  constructor(
    readonly signStore: SignStore,
    readonly signHttpService: SignHttpService
  ) {}

  signUp(user: User){
    return this.signHttpService.signUp(user).pipe(map(result => {
      this.signStore.pathUser(result);
      return result;
    }))
  }

  signIn(email: string, password: string){
    return this.signHttpService.signIn(email, password).pipe(map(result => {
      this.signStore.pathUser(result);
      return result;
    }));
  }

  getUser(){
    return this.signStore.getUser();
  }
}
