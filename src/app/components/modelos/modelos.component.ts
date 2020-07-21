import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../models/auto.model';
import { CarService } from '../../services/cars.service';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  autos: CarModel[] = [];


  constructor( private CarServise: CarService) {
    

   }

  ngOnInit(): void {
    this.CarServise.getCars()
      .subscribe( (resp:any) => {
        this.autos = resp;
        console.log(resp);
      })
    
  }

}
