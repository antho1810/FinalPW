import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'propietarios', component: PropietariosComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'Add/:id', component: AgregarComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
