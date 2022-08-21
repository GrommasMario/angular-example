import {HttpClient} from "@angular/common/http";
import {AbstractHttpService} from "../../http-services/AbstractHttpService";
import {SignHttpMock} from "./sign.http-mock";
import {User} from "../../models/User";
import {Player} from "../../models/Player";
import {Injectable} from "@angular/core";

@Injectable()
export class SignHttpService extends AbstractHttpService {
  constructor(readonly httpClient: HttpClient, readonly mock: SignHttpMock) {
    super();
  }

  signIn(email: string, password: string){
    if(this.mockIsOn){
      return this.mock.find(email, password);
    } else {
      return this.httpClient.get<User & Player>('', {headers: {authorization: `${email}:${password}`}});
    }
  }

  signUp(user: User){
    if(this.mockIsOn){
      return this.mock.default(user);
    } else {
      return this.httpClient.post<User & Player>('', user);
    }
  }
}
