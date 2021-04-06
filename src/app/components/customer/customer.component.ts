import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Customerdto } from 'src/app/models/customerdto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[] = [];
  customerDtos:Customerdto[] = [];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDtos();
  }
  
  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
    })
    
  }
  getCustomerDtos()
  {
    this.customerService.getCustomerDtos().subscribe(response => {
      this.customerDtos = response.data;
    });
  }
}
