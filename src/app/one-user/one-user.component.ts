import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {


  @Input('login') login: string = "";
  @Input('avatar') avatar: string = "";
  @Input('link') url: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
