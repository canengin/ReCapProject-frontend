import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { ColorAddComponent } from './components/color-add/color-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/cardto/:carId", component:CardtoComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"colors/add", component:ColorAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
