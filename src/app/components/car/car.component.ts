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
  currentCar:Car;

  path = "https://localhost:44308/Images";

  constructor(
    private carService: CarService,
    private carImageService:CarimageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
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
  getCarImage(carId:number)
  {
    this.carImageService.getCarImage(carId).subscribe(response => {
      this.carImages = response.data;
    });
  }
  getImagePath(image:string)
  {
    let newPath = this.path + image;
    return newPath; 
  }
  setCurrentCar(car:Car) {
    this.currentCar = car;
  }
}

