import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    NoAuthGuard
  ]
})
export class LoginModule {}
