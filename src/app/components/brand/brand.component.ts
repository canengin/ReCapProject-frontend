import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  filterBrandText = '';

  constructor(
    private brandService: BrandService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'selected';
    } else {
      return ' ';
    }
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return 'selected';
    } else {
      return ' ';
    }
  }
  setParams(currentBrand: Brand) {
    if (currentBrand.id) {
      this.router.navigate(['cars/brand/' + currentBrand.id], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.router.navigate(['cars/'], { relativeTo: this.activatedRoute });
    }
  }
}
