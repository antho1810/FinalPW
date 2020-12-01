Bienvenidos al repositorio LoginApp
Proyecto final

Para tener en cuenta, con antipación instalar los componentes necesarios para el proyecto:

"Component Install"

Una ves ejecutado este comando se creará la carpeta loginApp con los bucles y códigos de terceros.

- mkdir LoginApp -cd LoginApp -npm install

Introducción:

Este proyecto se crea inicalmente para complementar el final del proyecto de un taller de vehículos, el cual tiene como objetivo implementar un sistema que permita la gestión diferentes puntos de negocio:

Vehículos en reparación
Propietario del vehículo
Detalle reparación del vehículo
Repuestos usados para la reparación
Costos de la reparación
Vehículos reparados por técnico
Técnicos
Estados financieros por mes
Para descargar da click en el siguiente link

Inicio
Una vez que descargues el repositorio ejecutalo y publicalo en un navegaror para iniciar.

- ng serve -o

Contenido

Home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  salir() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

}
Login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {

    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }


  login( form: NgForm ) {

    if (  form.invalid ) { return; }

    //Swal.fire({
      //allowOutsideClick: false,
      //type: 'info',
      //text: 'Espere por favor...'
    //});
    //Swal.showLoading();


    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        //Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }


        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err.error.error.message);
        //Swal.fire({
          //type: 'error',
          //title: 'Error al autenticar',
          //text: err.error.error.message
        //});
      });

  }

}
Registro.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ) {

    if ( form.invalid ) { return; }

    //Swal.fire({
      //allowOutsideClick: false,
      //type: 'info',
      //text: 'Espere por favor...'
    //});
    //Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        //Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);
        //Swal.fire({
         //type: 'error',
         //title: 'Error al autenticar',
         //text: err.error.error.message
        //});
      });
  }


}
Cuentas
Crear una cuenta en Github
Crear una cuenta en Firebase
Crear una cuenta en Heroku
Código PhP:
Javascript　
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
HTML code
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>


![](https://github.com/Klerith/angular-login-demoapp/blob/master/src/assets/images/demo.png?raw=true)
