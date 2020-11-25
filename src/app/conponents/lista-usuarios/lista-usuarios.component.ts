import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicio/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [UsuariosService],
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:any [];

  constructor(
    private userService:UsuariosService,
    private router:Router
    ) { }

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


  eliminarUser(id:string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Los cambios no se pueden revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, eliminar usuario!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUsuario(id).subscribe(
          res =>{
            this.router.navigate([ '/' ]);
          },
          error =>{
            console.log(error);
            this.router.navigate([ '/' ]);
          }
        );
        Swal.fire(
          'Eliminano!',
          'se ha eliminado correctamente el usuario',
          'success'
        )
      }
    })


  }




}
