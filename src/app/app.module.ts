import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { UseroperationclaimComponent } from './components/useroperationclaim/useroperationclaim.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { OperationclaimComponent } from './components/operationclaim/operationclaim.component';
import { RentaldtoComponent } from './components/rentaldto/rentaldto.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    UserComponent,
    NaviComponent,
    UseroperationclaimComponent,
    CustomerComponent,
    CardtoComponent,
    OperationclaimComponent,
    RentaldtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
