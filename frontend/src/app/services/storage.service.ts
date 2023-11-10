import { Injectable } from '@angular/core';
import { LocalUser } from '../types/user.types';
import { STORAGE_KEYS } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(STORAGE_KEYS.localUser);
    if (user) return true;

    return false;
  }

  public getLocalUser() : LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null as any;
    }
    else {
      return JSON.parse(usr);
    }
  }

  public setLocalUser(obj : LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }
}
