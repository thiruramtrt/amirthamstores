import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amirtha-forntend';

  navchange: Observable<boolean>;
  navproperty:boolean;

  checklogin:Observable<boolean>;
  loginstatus:boolean;

  constructor(private _authservice: AuthService, private _router: Router, private spinnerService: Ng4LoadingSpinnerService){
    this.spinnerService.show();
    setTimeout(()=>this.spinnerService.hide(),1000)
   }

  ngOnInit(){

   this.navchange = this._authservice.getchangehf;
   this.navchange.subscribe(res=>{
     this.navproperty = res;
     console.log(this.navproperty);
   })

   this.checklogin = this._authservice.isLoggedIn;
   this.checklogin.subscribe(res=>{
     this.loginstatus = res;
     console.log(this.loginstatus)
   })

  //  console.log(this.islogged)

  }

  show()
{
  this.spinnerService.show();
  setTimeout(()=>this.spinnerService.hide(),1000)
}

  changeheaderprop(){
    this.spinnerService.show();
    setTimeout(()=>{
      this.spinnerService.hide();
      this._authservice.changeheadfoot();
      this._router.navigate(['/login'])
    },2000)
    
  }

  changebilllink(){
    this._authservice.changebillnav();
  }

}
