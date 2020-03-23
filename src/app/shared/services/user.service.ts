import { User } from "./../models/user";
import { Injectable } from "@angular/core";
import { UserDetail } from "../models/UserDetail";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userDetail: UserDetail;

  users: UserDetail[] = [
    {
      ID: 1,
      FirstName: "Nivedita",
      LastName: "Singh",
      Email: "test1@go.com"
    },
    {
      ID: 2,
      FirstName: "Nivi",
      LastName: "Singh",
      Email: "test2@go.com"
    },
    {
      ID: 3,
      FirstName: "Neha",
      LastName: "Singh",
      Email: "test3@go.com"
    }
  ];

  constructor(private router: Router) {}

  addUser(user: User) {
    console.log(user);
  }

  getUserDetail() {
    console.log("user Details");

    return this.users;
  }
}
