import {MeetingsHttpService} from "./meetings.http-service";
import {MeetingsStore} from "./meetings.store";
import {Injectable} from "@angular/core";
import {MeetingHttpIn} from "../../../../Interfaces/MeetingHttpIn";
import {Meeting} from "../../../../models/Meeting";

@Injectable({providedIn: 'root'})
export class MeetingsService {
  constructor(
    readonly meetingHttpService: MeetingsHttpService,
    readonly meetingStoreService: MeetingsStore
  ) {
    this.init();
  }

  protected init(){
    this.meetingHttpService.getList().subscribe(r => {
      this.meetingStoreService.fillList(r.map(meetingHttp => new Meeting(meetingHttp)));
    });
  }

  addToStore(meeting: MeetingHttpIn){
    this.meetingStoreService.addToStoreList(new Meeting(meeting))
  }

  getList(){
    return this.meetingStoreService.getList();
  }

  cancelMeeting(id: number){
    this.meetingHttpService.cancelMeeting(id).subscribe(canceledMeeting => {
      this.meetingStoreService.dropFromStoreList(id);
    })
  }
}
