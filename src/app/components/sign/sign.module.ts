import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../modal/modal.module";
import {SignStore} from "./sign.store";
import {SignHttpMock} from "./sign.http-mock";
import {SignService} from "./sign.service";
import {SignHttpService} from "./sign.http-service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SignComponent
  ],
  providers: [
    SignStore,
    SignHttpMock,
    SignHttpService,
    SignService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    RouterModule
  ]
})
export class SignModule { }

