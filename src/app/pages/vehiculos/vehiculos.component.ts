import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from 'src/app/models/vehiculo.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: VehiculoModel[] = [];
  cargando = false;

  constructor(private vehiculosService: VehiculosService,
    private router: Router) { }

  ngOnInit(): void {

    this.cargando = true;
    this.vehiculosService.getVehiculo()
      .subscribe(resp => {
        //console.log(resp);
        this.vehiculos = resp;
        this.cargando = false;
      });
  }

  borrarVehiculo(vehiculo: VehiculoModel, i: number) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Estas seguro que deseas borrar a ${vehiculo.Nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {

      if (resp.value) {
        this.vehiculos.splice(i, 1);
        this.vehiculosService.BorrarVehiculo(vehiculo.id).subscribe();
      }

    });

  }

  verVehiculo(idx: number) {
    this.router.navigate(['/detalle', idx]);
  }

}
