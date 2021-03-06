import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cardto } from 'src/app/models/cardto';
import { Customerdto } from 'src/app/models/customerdto';
import { Rental } from 'src/app/models/rental';
import { Rentaldto } from 'src/app/models/rentaldto';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalDtos: Rentaldto[] = [];
  customers:Customerdto[]=[];
  customerId:number;
  rentdate:Date;
  returndate:Date;
  rental: Rental;
  isRented:boolean = false;


  @Input() carforrental:Cardto;
  constructor(private rentalService:RentalService,private customerService:CustomerService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response => {
    this.rentals = response.data;
    })
  }
  getRentalDtos(){
    this.rentalService.getRentalDtos().subscribe(response => {
      this.rentalDtos = response.data;
    })
  }
  getAllCustomers()
   {
     this.customerService.getCustomerDtos().subscribe(response => {
       this.customers = response.data;
     });
   }

   createRent()
   {
    let rent:Rental = {
      carID: this.carforrental.carID,
      customerID: this.customerId,
      rentDate: this.rentdate,
      returnDate: this.returndate,
      price: this.carforrental.dailyPrice
   };
    this.rental = rent;
    this.isRented = true;
    this.toastrService.success("Your rental request has been received. You are redirected to the payment page.");
   }
}
