import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarlateralComponent } from './conponents/navbarlateral/navbarlateral.component';
import { NavbartopComponent } from './conponents/navbartop/navbartop.component';
import { FooterComponent } from './conponents/footer/footer.component';

import { ListaUsuariosComponent } from './conponents/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './conponents/nuevo-usuario/nuevo-usuario.component';

//rutas
import { RouterModule } from '@angular/router';
import { APPROUTES } from './app.routes';
import { EditarUsuarioComponent } from './conponents/editar-usuario/editar-usuario.component';
import { UsuariosService } from './servicio/usuarios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarlateralComponent,
    NavbartopComponent,
    FooterComponent,
    ListaUsuariosComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot( APPROUTES , {useHash:true})
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
