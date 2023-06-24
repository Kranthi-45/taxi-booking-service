import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor( private router: Router) { }
  driverDetails: any
  ngOnInit(): void {
    const bookedDetails = sessionStorage.getItem("bookedDetails");
    if (bookedDetails) {
      this.driverDetails = JSON.parse(bookedDetails);
    }
    console.log("Booking Details Page",this.driverDetails);
  }
  goToHomePage(){
    this.router.navigate(['home']);
  }
}
