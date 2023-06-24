import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  menudata: any= [
    {
    type: "link",
    title: "Booking",
    path:"/booking"
  },
  {
    type: "link",
    title: "SignUp",
    path:"/signup"
  },
  {
    type: "link",
    title: "SignIn",
  },
  {
    type: "link",
    title: "About US",
    path:"/about-us"
  },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
