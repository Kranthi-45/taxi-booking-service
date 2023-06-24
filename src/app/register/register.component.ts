import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any;

  constructor(private fb: FormBuilder,private api: ApiService, private router:Router) { 
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      referralCode:['', [Validators.required]],
      isCabRider:['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  generateId(): number {
    const min = 1000000; // Minimum value for the random ID
    const max = 9999999; // Maximum value for the random ID
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  onRegister(){
      // Generate UUID
  const id = this.generateId();

    var reg = new Register();
    reg.id = id;
    reg.name=this.registerForm.controls['name'].value;
    reg.age=this.registerForm.controls['age'].value;
    reg.username=this.registerForm.controls['username'].value;
    reg.password=this.registerForm.controls['password'].value;
    reg.address=this.registerForm.controls['address'].value;
    reg.referralCode=this.registerForm.controls['referralCode'].value;
    reg.isCabRider=this.registerForm.controls['isCabRider'].value === true ? "Yes" :"No";

    this.api.registerAccount(reg).subscribe((data)=>{
      console.log(data);
      console.log("successfully Rgistered");
     });  

  }
}
