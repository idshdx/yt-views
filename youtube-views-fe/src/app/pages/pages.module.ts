import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module  } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';


import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';

import { AppRoutingModule } from '../app.routing';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      NouisliderModule,
      JwBootstrapSwitchNg2Module ,
      AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
      SharedModule
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        PagesComponent,
        ProfileComponent
    ]
})
export class PagesModule { }
