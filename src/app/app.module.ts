import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule, RegistrationFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService, UserService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { User } from './shared/models/user';
import { DxPivotGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    RegistrationFormModule,
    AppRoutingModule,
    DxPivotGridModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, UserService,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
