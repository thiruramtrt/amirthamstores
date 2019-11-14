import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,private _router: Router) { }

  ngOnInit() {
  }

  changeheaderprop(){
    this.authService.changeheadfoot();
    this._router.navigate(['/login'])
  }

}
