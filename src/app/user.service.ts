import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://api.github.com/users')
  }

  searchUser(query: string) {
    return this.http.get(`https://api.github.com/search/users?q=${query}`)
  }
}