import { Component, OnInit } from '@angular/core';
import { Rentaldto } from 'src/app/models/rentaldto';
import { RentaldtoService } from 'src/app/services/rentaldto.service';

@Component({
  selector: 'app-rentaldto',
  templateUrl: './rentaldto.component.html',
  styleUrls: ['./rentaldto.component.css']
})
export class RentaldtoComponent implements OnInit {
  rentaldtos: Rentaldto[] = [];
  dataLoaded=false;
  
  constructor(private rentaldtoService:RentaldtoService) { }

  ngOnInit(): void {
   this.getRentaldtos();
  }
  
  getRentaldtos(){
    this.rentaldtoService.getRentaldtos().subscribe(response=>{
      this.rentaldtos=response.data
      this.dataLoaded=true;
    })
    
  }

}
