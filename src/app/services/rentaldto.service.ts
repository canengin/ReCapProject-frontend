import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldto } from '../models/rentaldto';


@Injectable({
  providedIn: 'root',
})
export class RentaldtoService {

  apiUrl = 'https://localhost:44308/api/rentals/getrentaldetails';


  constructor(private httpClient: HttpClient) {}

  getRentaldtos():Observable<ListResponseModel<Rentaldto>> {
    return this.httpClient.get<ListResponseModel<Rentaldto>>(this.apiUrl);
  }
}
