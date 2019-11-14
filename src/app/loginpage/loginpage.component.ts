import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private fb :FormBuilder, private authservice: AuthService) {

   }

    loginform = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });



  ngOnInit() {
   
  }

  onSubmit(){
    this.authservice.login(this.loginform.value)
  }

  logout(){
    this.authservice.logout();
  }

}
