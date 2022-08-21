import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SignModule } from '../sign/sign.module';

@NgModule({
    declarations: [SideMenuComponent],
    exports: [SideMenuComponent],
    imports: [CommonModule, AppRoutingModule, SignModule],
})
export class SideMenuModule {}
