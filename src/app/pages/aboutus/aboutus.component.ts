import { AppModule } from "./../../app.module";
import { Component, OnInit, NgModule, Inject } from "@angular/core";
import { UserDetail } from "src/app/shared/models/UserDetail";
import { UserService } from "src/app/shared/services";
import { BrowserModule } from "@angular/platform-browser";
import { DxPivotGridModule } from "devextreme-angular";
import { FORMERR } from "dns";

@Component({
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.scss"]
})
export class AboutusComponent {
  users: UserDetail[];
  constructor(private userservice: UserService) {
    this.users = this.userservice.getUserDetail();

    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].FirstName);


    }

    console.log(this.userservice.getUserDetail());
  }
}
