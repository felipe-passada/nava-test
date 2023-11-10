import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authApi: AuthService,
    private formBdlr: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {}

  loginForm = this.formBdlr.group(({
    email: [''],
    password: ['']
  }));
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }


  authenticate() {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.authApi.login(email, password).subscribe(res => {
          const token = res.body.Authorization;
          this.storageService.setLocalUser(token);
          this.isLoggedIn = true;
          this.redirect()
      });
    }
  };

  redirect() {
    this.router.navigate(['users'])
  }



}
