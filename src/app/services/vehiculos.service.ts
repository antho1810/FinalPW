import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculoModel } from '../models/vehiculo.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class VehiculosService {


  private url = 'https://gtv-proyecto-final.firebaseio.com';

  constructor(private http: HttpClient) { }


  crearVehiculo(vehiculo: VehiculoModel) {

    return this.http.post(`${this.url}/vehiculos.json`, vehiculo)
      .pipe(
        map((resp: any) => {
          vehiculo.id = resp.name;
          return vehiculo;
        })
      );

  }

  actualizarVehiculo(vehiculo: VehiculoModel) {

    const VehiculoTemp = {
      ...vehiculo
    };

    delete VehiculoTemp.id;

    return this.http.put(`${this.url}/vehiculos/${vehiculo.id}.json`, VehiculoTemp);
  }

  BorrarVehiculo(id: string){
    return this.http.delete(`${this.url}/vehiculos/${id}.json`);
  }

  getVehi(id:string){
  
    return this.http.get(`${this.url}/vehiculos/${id}.json`)
  }

  getVehiculo() {
    return this.http.get(`${this.url}/vehiculos.json`)
      .pipe(
        map(this.crearArreglo),
        delay(0)

      );
  }


  private crearArreglo(vehiculosObj: object) {

    const vehiculos: VehiculoModel[] = [];

    //console.log(vehiculosObj);

    Object.keys(vehiculosObj).forEach(key => {

      const vehiculo: VehiculoModel = vehiculosObj[key];
      vehiculo.id = key;

      vehiculos.push(vehiculo);
    });

    if (vehiculosObj === null) { return []; }
    return vehiculos;
  }

}
