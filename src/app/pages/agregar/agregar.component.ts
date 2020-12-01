import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../../models/vehiculo.model';
import { NgForm } from '@angular/forms'
import { VehiculosService } from 'src/app/services/vehiculos.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  vehiculo: VehiculoModel = new VehiculoModel();

  constructor(private vehiculosService: VehiculosService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    console.log(id);

    if( id !== 'nuevo' ){

      this.vehiculosService.getVehi(id)
      .subscribe( (resp: VehiculoModel) => {
        this.vehiculo = resp;
        this.vehiculo.id = id;
      });
    }
  }

  guardar(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.vehiculo.id) {
      peticion = this.vehiculosService.actualizarVehiculo(this.vehiculo);
       // .subscribe(resp => {console.log(resp);});
    } else {
      peticion = this.vehiculosService.crearVehiculo(this.vehiculo);
        //.subscribe(resp => {console.log(resp);this.vehiculo = resp;});
    }

    peticion.subscribe( resp =>{
      
      Swal.fire({
        title: this.vehiculo.Nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });

    });
    //console.log(form);
    //console.log(this.vehiculo);
  }

}

