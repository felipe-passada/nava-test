import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any
  isAuthenticated: boolean = false;

  constructor(
    private userApi: UserService,
    private stgServive: StorageService,
    private router: Router
    ) {}

  ngOnInit() {
    this.isAuthenticated = this.stgServive.isLoggedIn();
    if (!this.isAuthenticated) {
      this.router.navigate(['login'])
    }
    this.fetchUsers();

  }

  fetchUsers() {
    this.userApi.fetchUsers().subscribe(res => this.users = res);
  }

  loadUsers() {
    this.userApi.batchLoadUsers().subscribe();
    setTimeout(() => { this.fetchUsers() }, 2000)
  }

  deleteUser (id: string) {
    this.userApi.deleteUser(id).subscribe();
    this.fetchUsers();
  }

}
