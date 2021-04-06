import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { Rentaldto } from '../models/rentaldto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44308/api';

  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "/rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDtos():Observable<ListResponseModel<Rentaldto>>
  {
    let newPath = this.apiUrl + "/rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rentaldto>>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>
  {
    let newPath = this.apiUrl + "/rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}