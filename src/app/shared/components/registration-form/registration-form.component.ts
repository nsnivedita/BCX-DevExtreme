import { User } from "./../../models/user";
import { NgModule, Component, enableProdMode } from "@angular/core";
import {
  DxCheckBoxModule,
  DxButtonModule,
  DxTextBoxModule,
  DxFormModule,
  DxValidatorModule,
  DxValidationGroupModule
} from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthService, AppInfoService, UserService } from "../../services";
import { Validators } from "@angular/forms";
import { MustMatch } from "./../../validators/must-match.validator";

@Component({
  selector: "app-registration-form",
  providers: [UserService],
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"]
})
export class RegistrationFormComponent {
  fname = "";
  lname = "";
  email = "";
  password = "";
  cpassword = "";
  
  
  constructor(
    private authService: AuthService,
    private userservice: UserService,
    private user: User,
    public appInfo: AppInfoService
  ) {}

  onRegClick(args) {
    if (
      !args.validationGroup.validate().isValid && {
        validator: MustMatch("password", "confirmPassword")
      }
    ) {
      return;
    }

    this.user.FirstName = this.fname;
    this.user.LastName = this.lname;
    this.user.Email = this.email;
    this.user.Password = this.password;

    this.userservice.addUser(this.user);
    this.authService.logOut();
    args.validationGroup.reset();
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule
  ],
  declarations: [RegistrationFormComponent],
  exports: [RegistrationFormComponent]
})
export class RegistrationFormModule {}
