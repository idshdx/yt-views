import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ RouterModule, CommonModule ],
  declarations: [ NavbarComponent, FooterComponent],
  exports:      [ NavbarComponent, FooterComponent, CommonModule ]
})

export class SharedModule { }
