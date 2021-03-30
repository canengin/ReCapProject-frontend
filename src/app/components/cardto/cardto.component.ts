import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardto } from 'src/app/models/cardto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  carDtos:Cardto;

  constructor(private carService:CarService, private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarDtos(params["carId"]);
      }
    });
  }

  getCarDtos(id:number)
  {
    this.carService.getCardtos(id).subscribe(response => {
      this.carDtos = response.data[0];
    })
  }
}
