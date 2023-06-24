import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  sampleData: any
  sampleDataBackup: any
  selectedOption: string = '';
  // userTable:boolean = true
  // bookingForm:any;
  fromValue: any;
  toValue: any;
  driverDetails: any;
  constructor(private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.api.getNearByDrivers().subscribe((data) => {
      console.log(data);
      this.sampleData = data;
      this.sampleDataBackup = this.sampleData;
    });
  }

  onDropdownChange() {
    // Check if both dropdown values are selected
    this.sampleData = this.sampleDataBackup;
    if (this.fromValue && this.toValue) {
      console.log(this.fromValue, this.toValue)
      this.sampleData = this.sampleData.filter((item: any) => item.from === this.fromValue && item.to === this.toValue)
      // Make the API call with the selected values
      // const apiUrl = `http://localhost:3333/nearbyDrivers?origin=${this.fromValue}&destination=${this.toValue}`;
      // this.http.get(apiUrl).subscribe((response) => {
      //   // Handle the API response here
      //   console.log(response);
      // });
    } else {
      this.sampleData = this.sampleDataBackup;
    }
  }
  viewDetails(value: any) {
    console.log("view details clicked", value)
    // this.router.navigate(['employee-detail',id]);
    this.driverDetails = value;
  }
  onBtnClick(driverDetails: any) {
    console.log("Booking", driverDetails);
    this.api.booking(driverDetails).subscribe((data) => {
      console.log("Successfully Booked", data);
      // Close the modal
      // const modalElement = document.getElementById('exampleModal');
      // const modal = bootstrap.Modal.getInstance(modalElement);
      // modal.hide();   

      const closeButton: HTMLElement | null = document.querySelector('.btn-close');
      sessionStorage.setItem("bookedDetails",JSON.stringify(driverDetails));
      if (closeButton) {
        closeButton.click();
      }

      this.router.navigate(['booking-details']);
    });
  }
}
