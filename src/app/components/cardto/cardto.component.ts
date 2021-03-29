import { Component, OnInit } from '@angular/core';
import { Cardto } from 'src/app/models/cardto';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  cardtos: Cardto[] = [];
  dataLoaded=false;
  
  constructor(private cardtoService:CardtoService) { }

  ngOnInit(): void {
   this.getCardtos();
  }
  
  getCardtos(){
    this.cardtoService.getCardtos(1).subscribe(response=>{
      this.cardtos=response.data
      this.dataLoaded=true;
    })
    
  }

}
