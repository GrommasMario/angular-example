import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderPopularComponent } from '../../components/header-popular/header-popular.component';
import { MeetingCardListModule } from '../../components/meeting-card-list/meeting-card-list.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';

@NgModule({
    declarations: [MainComponent, HeaderPopularComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        MeetingCardListModule,
        SideMenuModule,
    ],
})
export class MainModule {}
