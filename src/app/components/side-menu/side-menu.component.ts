import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../sign/sign.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    sideButtons = [
        { title: 'ДРУЗЬЯ', link: 'friends' },
        { title: 'ВСТРЕЧИ', link: 'meetings' },
        { title: 'ПРИГЛАШЕНИЯ', link: 'invites' },
    ];

    constructor(readonly signService: SignService, readonly router: Router) {}

    async exit() {
        await this.router.navigateByUrl('sign');
    }
}
