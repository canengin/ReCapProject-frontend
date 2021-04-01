import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Cardto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDtos: Cardto[] = [];
  carImages:CarImage[] = [];

  path = "https://localhost:44308/Images/";
  constructor(
    private carService: CarService,
    private carImageService:CarimageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
        this.getCarImage(params["Id"]);
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCardtos(id: number) {
    this.carService.getCardtos(id).subscribe((response) => {
      this.carDtos = response.data;
    });
  }
  getAllCardtos() {
    this.carService.getAllCardtos().subscribe((response) => {
      this.carDtos = response.data;
    });
  }
  getCarImage(Id:number)
  {
    this.carImageService.getCarImage(Id).subscribe(response => {
      this.carImages = response.data;
    });
  }

  getImagePath(image:string)
  {
    let newPath = this.path + image;
    return newPath; 
  }
}
