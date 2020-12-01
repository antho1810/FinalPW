## Bienvenidos al repositorio LoginApp
Proyecto final

Para tener en cuenta, con antipación instalar los componentes necesarios para el proyecto:

*"Component Install"*

**Introducción:**

Este proyecto se crea inicalmente para complementar el final del proyecto de un taller de vehículos, el cual tiene como objetivo implementar un sistema que permita la gestión  diferentes puntos de negocio:
1. Vehículos en reparación
2. Propietario del vehículo
3. Detalle reparación del vehículo
4. Repuestos usados para la reparación
5. Costos de la reparación
6. Vehículos reparados por técnico
7. Técnicos
8. Estados financieros por mes

Para descargar da click en el siguiente [link](https://github.com/antho1810/FinalPW.git "link")

### Inicio
Una vez que descargues el repositorio, descomprimelo en tu escritorio o donde quieras, entras a la carpeta le das click derecho, abre el cmd del administrador e ingresas estos comandos:
```
cd LoginApp

npm install

```

Luego ejecuta este comando y el mismo se abrira en el navegador que estes utilizando.
```
ng serve -o

```
# Contenido

### Home.component.ts
```
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
```
### Login.component.ts
```
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
```

### Registro.component.ts
```
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
```
### Cuentas

##### Crear una cuenta en [Github](https://github.com/ "Github")

##### Crear una cuenta en [Firebase](https://firebase.google.com/ "Firebase")

##### Crear una cuenta en [Heroku](https://id.heroku.com/login "Heroku")

![Lista vehiculos](src/assets/images/demolistavehi.png?raw=true)
![Lista propietarios](src/assets/images/demolistapropi.png?raw=true)
![Agregar vehiculo](src/assets/images/demoagregar1.png?raw=true)
![](src/assets/images/demoagregar2.png?raw=true)

![Registro](src/assets/images/demoRegistro.png?raw=true)
![Login](src/assets/demo.png?raw=true)
Este home es lo que le sigue despues del login, apenas tu le das en el boton ingresar que esta en el login, te llevará a está pagina.
![Home](src/assets/images/demoHome.png?raw=true)
