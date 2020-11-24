import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './conponents/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './conponents/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './conponents/editar-usuario/editar-usuario.component';


export const APPROUTES:Routes = [
  { path:'inicio', component:ListaUsuariosComponent},
  { path:'nuevousuario', component:NuevoUsuarioComponent},
  { path:'editarusuario/:id', component:EditarUsuarioComponent},
  { path:'borrarusuario/:id', component:ListaUsuariosComponent},
  { path: '', pathMatch:'full' , component:ListaUsuariosComponent},
  { path: '**',  pathMatch:'full' , component:ListaUsuariosComponent}

];
