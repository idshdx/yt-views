import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'landing',     component: LandingComponent },
    {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },
    {
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfileModule'
    },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
          // preload all modules; optionally we could
          // implement a custom preloading strategy for just some
          // of the modules (PRs welcome 😉)
          preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
