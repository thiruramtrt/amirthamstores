import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BillingComponent } from './billing/billing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirconditionerComponent } from './airconditioner/airconditioner.component';
import { FooterComponent } from './footer/footer.component';
import { CookerComponent } from './cooker/cooker.component';
import { FanComponent } from './fan/fan.component';
import { FridgeComponent } from './fridge/fridge.component';
import { GrinderComponent } from './grinder/grinder.component';
import { HeaterComponent } from './heater/heater.component';
import { IndstoveComponent } from './indstove/indstove.component';
import { MixieComponent } from './mixie/mixie.component';
import { StoveComponent } from './stove/stove.component';
import { TapgrinderComponent } from './tapgrinder/tapgrinder.component';
import { WashmachineComponent } from './washmachine/washmachine.component';
import { TvComponent } from './tv/tv.component';
import { ChairComponent } from './chair/chair.component';
import { SofaComponent } from './sofa/sofa.component';
import { SteelbureaueComponent } from './steelbureaue/steelbureaue.component';
import { SteelcartComponent } from './steelcart/steelcart.component';
import { WoodbureaueComponent } from './woodbureaue/woodbureaue.component';
import { WoodcartComponent } from './woodcart/woodcart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  {path:'', component:HomepageComponent,},
  {path:'ac', component:AirconditionerComponent},
  {path:'cooker', component:CookerComponent},
  {path:'fan', component:FanComponent},
  {path:'fridge', component:FridgeComponent},
  {path:'grinder', component:GrinderComponent},
  {path:'heater', component:HeaterComponent},
  {path:'indstove', component:IndstoveComponent},
  {path:'mixie', component:MixieComponent},
  {path:'tv', component:TvComponent},
  {path:'stove', component:StoveComponent},
  {path:'ttgrinder', component:TapgrinderComponent},
  {path:'washmachine', component:WashmachineComponent},
  {path:'chair', component:ChairComponent},
  {path:'sofa', component:SofaComponent},
  {path:'steelbureaue', component:SteelbureaueComponent},
  {path:'steelcart', component:SteelcartComponent},
  {path:'woodbureaue', component:WoodbureaueComponent},
  {path:'woodcart', component:WoodcartComponent},
  {path:'login', component:LoginpageComponent},
  {path:'billingdetails',component:BillingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
