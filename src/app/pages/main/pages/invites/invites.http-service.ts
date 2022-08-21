import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {InviteHttpIn} from "../../../../Interfaces/InviteHttpIn";
import {AbstractHttpService} from "../../../../http-services/AbstractHttpService";
import {InvitesHttpMock} from "./invites.http-mock";
import {Observable} from "rxjs";

@Injectable()
export class InvitesHttpService extends AbstractHttpService {
  private mockService = new InvitesHttpMock();

  constructor(readonly httpClient: HttpClient) {
    super();
  }

  getList(){
    if(this.mockIsOn){
      return this.mockService.getList()
    } else {
      return this.httpClient.get<InviteHttpIn[]>('');
    }
  }

  approveInvite(id: number){
    if(this.mockIsOn){
      return this.mockService.getById(id);
    } else {
      return this.httpClient.put<InviteHttpIn>('', {});
    }
  }

  declineInvite(id: number){
    if(this.mockIsOn){
      return this.mockService.getById(id);
    } else {
      return this.httpClient.delete<InviteHttpIn>('', {});
    }
  }

}
