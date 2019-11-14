import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private changehf: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  changeheadfoot(){
    this.changehf.next(false);
  }

  changebillnav(){
    this.changehf.next(false);
  }

  get getchangehf() {
    return this.changehf.asObservable();
  }

  constructor(
    private router: Router, private http: HttpClient
  ) {}

  login(user: User) {
    console.log(user);
    var userdata;
    var result = this.http.post('http://localhost:3500/commonroutes/logincheck',user)
    result.subscribe(data => {
    userdata = data;
    if (userdata.length !== 0) {
      this.loggedIn.next(true);
      this.router.navigate(['/billingdetails']);
    } else{
      alert('Invalid username or password')
    }  
    },error=> {
      console.log(error);
    })

  }

  

  logout() {
    this.changehf.next(true);
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  homepage(){
    this.changehf.next(true);
    this.loggedIn.next(true);
  }


}