import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { User } from 'src/app/models/User.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  newUser: User = { name: '', age: null as any };
  loading: boolean = false;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().pipe(finalize(() => this.loading = false)).subscribe({
      next: (users) => {
        this.users = users;
      }
      , error: (error) => {
        this.loading = false;
      }
    })
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (response) => {
        alert(response.body.message);
        this.newUser = { name: '', age: null };
        this.loadUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
