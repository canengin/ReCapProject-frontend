  
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  creditCard:string;
  expirationDate:string;
  securityCode:string;

  @Input() rentForPayment:Rental;
  constructor(private rentalService:RentalService, private paymentService:PaymentService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    
  }

  addPayment()
  {
    let rent:Rental = this.rentForPayment;
    let payment:Payment = {
      creditCardNumber:this.creditCard,
      expirationDate:this.expirationDate,
      securityCode:this.securityCode,
      price:this.rentForPayment.price,
      customerID:this.rentForPayment.customerID
    };
     this.paymentService.addPayment(payment).subscribe(response => {
      this.toastrService.success("Your payment transaction has been completed successfully");
   });
   this.rentalService.addRental(rent).subscribe(response => {
    this.toastrService.success("Car rental process has been completed successfully");
 });
  }
}