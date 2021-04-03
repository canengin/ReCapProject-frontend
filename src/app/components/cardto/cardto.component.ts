import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  carDtos:Cardto;
  carImages:CarImage[]=[];

  path = "https://localhost:44308/Images/";
  
  constructor(private carService:CarService, 
    private activetedRoute:ActivatedRoute,
    private carImageService:CarimageService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarDtos(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    });
  }

  getCarDtos(id:number)
  {
    this.carService.getCardtos(id).subscribe(response => {
      this.carDtos = response.data[0];
    })
  }
  getCarImages(id:number)
  {
    this.carImageService.getCarImages(id).subscribe(response => {
      this.carImages = response.data;
    });
  }
  getImagePath(image:string)
  {
    let newPath = this.path + image;
    return newPath; 
  }
}
