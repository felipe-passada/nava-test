import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any
  isLoading:boolean = false;

  constructor(private userApi: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.loadusers();
    this.isLoading = false;
  }

  loadusers() {
    setTimeout(() => {
      this.userApi.fetchUsers().subscribe(res => this.users = res);
    }, 2000)
  }

  deleteUser (id: string) {
    console.log(`DELETING User: ${id}`);
    this.userApi.deleteUser(id).subscribe();
    this.loadusers();
    this.isLoading = false;
  }

}
