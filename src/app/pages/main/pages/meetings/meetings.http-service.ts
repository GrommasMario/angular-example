import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractHttpService} from "../../../../http-services/AbstractHttpService";
import {Meeting} from "../../../../models/Meeting";
import {MeetingsHttpMock} from "./meetings.http-mock";

@Injectable()
export class MeetingsHttpService extends AbstractHttpService {
  private mockService = new MeetingsHttpMock();

  constructor(protected readonly httpClient: HttpClient) {
    super();
  }

  getList(){
    if(this.mockIsOn){
      return this.mockService.getList();
    } else {
      return this.httpClient.get<Meeting[]>('');
    }
  }

  cancelMeeting(id: number){
    if(this.mockIsOn){
      return this.mockService.getById(id);
    } else {
      return this.httpClient.delete<Meeting>('');
    }
  }

}
