import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"signup", component:RegisterComponent},
  {path:"booking",component:BookingComponent},
  {path:"booking-details",component:BookingDetailsComponent},
  {path:"about-us",component:AboutUsComponent},
  // {path:"employee-detail/:id",component:EmployeeDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
