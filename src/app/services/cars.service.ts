import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable ({
    providedIn: 'root'
})

export class CarService {

    private url = 'https://challenge.agenciaego.tech/models/';

    constructor (private http: HttpClient ){


    }

    //metodos para traer info de la api
    getCars(){
     return  this.http.get(`${ this.url }`);
    }

    getInfoCar( id: string ){
        return this.http.get(`${ this.url }${id}`);
    }

}
