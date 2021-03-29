import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardto } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CardtoService {

  apiUrl = 'https://localhost:44308/api/';


  constructor(private httpClient: HttpClient) {}

  getCardtos(id:number):Observable<ListResponseModel<Cardto>> {
    let newPath=this.apiUrl+"cars/getcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }
}
