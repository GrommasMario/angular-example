import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent],
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
})
export class ModalModule {}
