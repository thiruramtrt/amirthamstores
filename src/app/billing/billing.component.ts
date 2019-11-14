import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingserviceService } from '../billingservice.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})

export class BillingComponent implements OnInit {

  constructor(private router: Router,private _billservice:BillingserviceService, private authService: AuthService) { }
  date;
  todaydate;
  totalcoll:number = 0;

  jewelnames;

  productdetail:any;

  productsearch;

  @ViewChild("getdate", {static: false}) div1: ElementRef; 

  Updatebillbook = new FormGroup({
    product: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    rate: new FormControl('',Validators.required)
  });

  addbillbook = new FormGroup({
    productname: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    rate: new FormControl('',Validators.required),
    gst: new FormControl('',Validators.required),
    thickness: new FormControl(''),
    height: new FormControl(''),
    type: new FormControl(''),
    brand: new FormControl(''),
    madein: new FormControl(''),
  });

  ngOnInit() {
    this.todaydate = new Date();
    this.date = new Date();
    this.Getbillbook();
  }

  ngAfterViewInit(){
    console.log(this.div1.nativeElement.innerText);
  }

  btnsearch(){
    console.log(this.productsearch);
  }

  billsubmit(){
    var datetime = this.div1.nativeElement.innerText;
    var obj1 = {date:datetime};
    var obj2 = this.Updatebillbook.value;
    var data = Object.assign({},obj1,obj2);
    console.log(data);
    this._billservice.updatebilling(data).subscribe(
      data => {
        alert('Record Uploaded successfully');
    },
    error => {
        console.log(error);
    }
    );
  }

  Getbillbook(){
    var data = this._billservice.getbillingdetails();
    data.subscribe(res=>{
      this.productdetail = res;
      console.log(res);  
    },error =>{
      console.log(error);
    });

    setTimeout(() => {
      this.totalcoll = 0;
      for (let index = 0; index < this.productdetail.length; index++) {
        // console.log(this.collectiondetail[index].grandtotal);
         this.totalcoll = parseInt(this.productdetail[index].amount) + this.totalcoll;
      }
      console.log(this.totalcoll);
    
    }, 2000);
    
  }

  addbillsubmit(){
    var datetime = this.div1.nativeElement.innerText;
    var obj1 = {date:datetime};
    var obj2 = this.addbillbook.value;
    var data = Object.assign({},obj1,obj2);
    console.log(data);
    this._billservice.addbilling(data).subscribe(
      data => {
        alert('Record Uploaded successfully');
    },
    error => {
        console.log(error);
    }
    );
  }

  returntohome(){
    this.authService.homepage();
    this.router.navigate(['/']);
  } 

  logout(){
    this.authService.logout();    
  }

}
