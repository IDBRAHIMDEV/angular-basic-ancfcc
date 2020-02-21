import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  loading: boolean = true;
  search: string = "";
  users: any[] = [];
  stockageUsers: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getAll().subscribe((response: any[]) => {
      this.stockageUsers = this.users = response
      this.loading = false;
    })
  }

  searchUsers() {

    if(!!this.search) {
    this.loading = true;
      
      this.userService.searchUser(this.search).subscribe(response => {
        this.users = response['items']
        this.loading = false;
      })
      return
    }

    this.users = this.stockageUsers;

  }

}
