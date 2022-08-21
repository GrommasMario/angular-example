import { Component, OnInit } from '@angular/core';
import {Invite} from "../../../../models/Invite";
import {InvitesService} from "./invites.service";

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.scss']
})
export class InvitesComponent implements OnInit {

  invites: Invite[] = []

  constructor(
    readonly invitesService: InvitesService,
  ) {

  }

  ngOnInit(): void {}

  toApprove(id: number){
    this.invitesService.approveInvite(id);
  }

  toDecline(id: number){
    this.invitesService.declineInvite(id);
  }

}
