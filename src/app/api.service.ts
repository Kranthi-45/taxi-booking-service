import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) {

   }
  public registerAccount(reg:any) {
    return this.httpclient.post("http://localhost:3000/user",reg);
  }
  public getNearByDrivers() {
    return this.httpclient.get("http://localhost:3000/nearbyDrivers");
  }
  public booking(book:any) {
    return this.httpclient.post("http://localhost:3000/booking",book);
  }
}
