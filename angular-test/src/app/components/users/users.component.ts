import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  addUser(user: User) {
    this.userService.createUser(user).subscribe(res => {
      this.loadUsers();
    })
  }

}
