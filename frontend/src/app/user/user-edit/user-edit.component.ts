import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  public user: User = {
    id: '',
    name: '',
    email: '',
    location: ''
  }
  private route = inject(ActivatedRoute);

  constructor(
    private userApi: UserService,
    private router: Router,
    public formBdlr: FormBuilder,
    public stgServive: StorageService
  ) {}
  isAuthenticated: boolean = false;

  userForm = this.formBdlr.group(({
    name: [''],
    email: [''],
    location: ['']
  }));

  ngOnInit() {
    this.isAuthenticated = this.stgServive.isLoggedIn();
    if (!this.isAuthenticated) {
      this.router.navigate(['login'])
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.fetchUserDetails(id);
  }

  fetchUserDetails(id: string) {
    this.userApi.fetchDetails(id).subscribe(res => {
      this.user = {
        id: res._id,
        name: res.name,
        email: res.email,
        location: res.location
      }
    });
  }

  saveChanges() {
    if (this.user.id) {
      const userData = {
        _id: this.user.id,
        name: this.userForm.value.name || this.user.name,
        email: this.userForm.value.email || this.user.email,
        location: this.userForm.value.location || this.user.location
      }

      this.userApi.editUser(this.user.id, userData).subscribe();
      this.router.navigate(['users'])
    }

  }

}
