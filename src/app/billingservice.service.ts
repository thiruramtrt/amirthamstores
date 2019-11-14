import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingserviceService {

  constructor(private http: HttpClient) { }

  apiurl = 'https://amirthambackend.herokuapp.com/furtroutes/';

  getbillingdetails() {
    console.log('service call');
    return this.http.get(this.apiurl + 'billingdetails');
  }

  updatebilling(data){
    return this.http.post(this.apiurl+'updatebillingdetails',data);
  }

  addbilling(data){
    return this.http.post(this.apiurl+'addbillingdetails',data);
  }

}
