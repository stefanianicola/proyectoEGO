import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/cars.service';
import { getLocaleId } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../../../models/auto.model';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  auto : CarModel = new CarModel();

  constructor(private CarService: CarService, 
              private route: ActivatedRoute) {


   }


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');


    this.CarService.getInfoCar( id )
      .subscribe( (resp:any) => {
        this.auto = resp;
        console.log(resp);
      })

  }

}
