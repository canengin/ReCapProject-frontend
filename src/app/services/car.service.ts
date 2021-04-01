import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Cardto } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  apiUrl = 'https://localhost:44308/api/';


  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getAllCardtos():Observable<ListResponseModel<Cardto>> {
    let newPath=this.apiUrl+"cars/getallcardetails";
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }
  getCardtos(carId:number):Observable<ListResponseModel<Cardto>> {
    let newPath=this.apiUrl+"cars/getcardetails?carid="+carId;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

}
