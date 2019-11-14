import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BillingComponent } from './billing/billing.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthGuard } from '../app/auth/auth.guard';
import { AuthService } from '../app/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AirconditionerComponent } from './airconditioner/airconditioner.component';
import { CookerComponent } from './cooker/cooker.component';
import { FooterComponent } from './footer/footer.component';
import { FanComponent } from './fan/fan.component';
import { FridgeComponent } from './fridge/fridge.component';
import { GrinderComponent } from './grinder/grinder.component';
import { HeaterComponent } from './heater/heater.component';
import { IndstoveComponent } from './indstove/indstove.component';
import { MixieComponent } from './mixie/mixie.component';
import { StoveComponent } from './stove/stove.component';
import { TvComponent } from './tv/tv.component';
import { TapgrinderComponent } from './tapgrinder/tapgrinder.component';
import { WashmachineComponent } from './washmachine/washmachine.component';
import { ChairComponent } from './chair/chair.component';
import { SofaComponent } from './sofa/sofa.component';
import { SteelbureaueComponent } from './steelbureaue/steelbureaue.component';
import { SteelcartComponent } from './steelcart/steelcart.component';
import { WoodbureaueComponent } from './woodbureaue/woodbureaue.component';
import { WoodcartComponent } from './woodcart/woodcart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BillingComponent,
    AirconditionerComponent,
    CookerComponent,
    FooterComponent,
    FanComponent,
    FridgeComponent,
    GrinderComponent,
    HeaterComponent,
    IndstoveComponent,
    MixieComponent,
    StoveComponent,
    TvComponent,
    TapgrinderComponent,
    WashmachineComponent,
    ChairComponent,
    SofaComponent,
    SteelbureaueComponent,
    SteelcartComponent,
    WoodbureaueComponent,
    WoodcartComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [AuthService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
