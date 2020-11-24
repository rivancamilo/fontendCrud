import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [UsuariosService],
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:any [];

  constructor(private userService:UsuariosService) { }

  ngOnInit(): void {

    /******************************************************
          Obtenemos todos los usuarios de la BD
    ******************************************************/
    this.userService.getUsuarios().subscribe( user =>{
      this.usuarios = user['usuarios'];
    },error =>{
      console.log(error)
    });

  }





}
