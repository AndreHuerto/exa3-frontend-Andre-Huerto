import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import {AuthrutasGuard} from './../app/services/guards/authrutas.guard';
import { RoleGuard } from './services/guards/role.guard';
import { GerenteComponent } from './components/Gerente/gerente/gerente.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'listar', component: ListarComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'Gerente'}},
  {path:'producto', component:ProductoComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'Administrador'}},
  {path: 'uploads', component: UploadsComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'Administrador'}},
  {path: 'ventasgerente', component: GerenteComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'Gerente'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
