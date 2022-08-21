import {InvitesHttpService} from "./invites.http-service";
import {Injectable} from "@angular/core";
import {InvitesStore} from "./invites.store";
import {Invite} from "../../../../models/Invite";
import {MeetingsService} from "../meetings/meetings.service";

@Injectable({providedIn: 'root'})
export class InvitesService {
  constructor(
    readonly invitesHttpService: InvitesHttpService,
    readonly invitesStore: InvitesStore,
    readonly meetingsService: MeetingsService
  ) {
    this.init();
  }

  init(){
    this.invitesHttpService.getList().subscribe(r => {
      this.invitesStore.fillList(r.map(invites => new Invite(invites)));
    });
  }

  getList(){
    return this.invitesStore.getList()
  }

  approveInvite(id: number) {
    this.invitesHttpService.approveInvite(id).subscribe(approvedInvite => {
      this.invitesStore.dropFromStoreList(approvedInvite.id);
      this.meetingsService.addToStore(approvedInvite.meeting);
    })
  }

  declineInvite(id: number){
    this.invitesHttpService.declineInvite(id).subscribe(approvedInvite => {
      this.invitesStore.dropFromStoreList(approvedInvite.id);
    })
  }
}
