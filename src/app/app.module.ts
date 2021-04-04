import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { RentaldtoComponent } from './components/rentaldto/rentaldto.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterbrandpipePipe } from './pipes/filterbrandpipe.pipe';

import{ToastrModule} from "ngx-toastr";
import { FilterColorPipe } from './pipes/filter-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    UserComponent,
    NaviComponent,
    CustomerComponent,
    CardtoComponent,
    RentaldtoComponent,
    FilterPipePipe,
    FilterbrandpipePipe,
    FilterColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
