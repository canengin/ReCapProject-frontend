import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Cardto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDtos: Cardto[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  filterText = '';
  brandId: number;
  colorId: number;
  currentCar:Car;
  carImages:CarImage[]=[];
  

  constructor(
    private carService: CarService,
    private carImageService:CarimageService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private brandService: BrandService,
    private colorService: ColorService


  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getFilteredCars(params['brandId'], params['colorId']);
      }else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
        this.getColors();
        this.getBrands();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.cars.forEach(element => {
        this.setPreviewImage(element)
      });
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.cars.forEach(element => {
        this.setPreviewImage(element)
      });
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.cars.forEach(element => {
        this.setPreviewImage(element)
      });
    });
  }
  getCardtos(id: number) {
    
    this.carService.getCardtos(id).subscribe((response) => {
      this.carDtos = response.data;
      this.toastrService.success('Detaylara yönlendiriliyorsunuz',"Başarılı");
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
  setCurrentCar(car:Car) {
    this.currentCar = car;
  }
  setPreviewImage(car:Car){
    this.carImageService.getCarImages(car.id).subscribe(response =>{
      car.previewImagePath=response.data[0].imagePath;
    })
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getFilteredCars(brandId: number, colorId: number) {
    this.carService.getFilteredCars(brandId, colorId).subscribe((response) => {
      this.carDtos = response.data;
      if(this.carDtos.length == 0)
      {
        this.toastrService.error("No cars matching your search were found.");
      }
    });
  }
  getSelectedColorId(colorId: number) {
    if(this.colorId == colorId)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedBrandId(brandId: number) {
    if(this.brandId == brandId)
    {
      console.log(this.brandId);
      return true;
    }
    else
    {
      return false;
    }
  }
}


