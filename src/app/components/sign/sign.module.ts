import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignComponent } from './sign.component';
import { ModalModule } from '../modal/modal.module';
import { SignStore } from './sign.store';
import { SignHttpMock } from './sign.http-mock';
import { SignService } from './sign.service';
import { ISignHttpService, SignHttpService } from './sign.http-service';
import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [SignComponent],
    providers: [
        SignStore,
        {
            provide: SignHttpService,
            useFactory: (httpClient: HttpClient): ISignHttpService => {
                if (environment.mockEnable) {
                    return new SignHttpMock();
                }

                return new SignHttpService(httpClient);
            },
        },
        SignService,
    ],
    imports: [CommonModule, ReactiveFormsModule, ModalModule, RouterModule],
})
export class SignModule {}
