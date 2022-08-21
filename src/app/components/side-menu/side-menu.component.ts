import { Component, OnInit } from '@angular/core';
import {SignService} from "../sign/sign.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  sideButtons = [
    {title: 'ДРУЗЬЯ', link: 'friends'},
    {title: 'ВСТРЕЧИ', link: 'meetings'},
    {title: 'ПРИГЛАШЕНИЯ', link: 'invites'},
  ]

  constructor(readonly signService: SignService, readonly router: Router) { }

  async exit(){
    await this.router.navigateByUrl('sign')
  }
}
