import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicio/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})

export class NuevoUsuarioComponent implements OnInit {

  paisesLocales:any [];
  forma:FormGroup;
  tituloPag:string;

  constructor(
    private userService:UsuariosService,
    private fb:FormBuilder,
    private router:Router

    ) {

      this.tituloPag = "Nuevo Usuario";


    }

  ngOnInit(): void {
      /******************************************************
            Obtenemos todos los paises de la BD
      ******************************************************/
       this.userService.getPaises().subscribe( pais =>{
        this.paisesLocales = pais['paises'];
        //console.log(pais['paises']);
      },error =>{
        console.log(error)
      });

      /******************************************************
            Inicializamos el formulario
      ******************************************************/
      this.crearFormulario();

  }


    /******************************************************************************
   ******************    Creacion del formulario      **************************************
  ******************************************************************************/
 crearFormulario(){
  this.forma = this.fb.group({
      tipoId   : ['',[Validators.required]],
      numeroId : ['',[Validators.required, Validators.minLength(4)]],
      nombre   : ['',[Validators.required, Validators.minLength(4)]],
      apellidos: ['',[Validators.required, Validators.minLength(4)]],
      email    : ['',[Validators.required, Validators.minLength(4),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      numCel   : ['',[Validators.required, Validators.minLength(9)]],
      pais     : ['',[Validators.required, Validators.minLength(4)]],
      ciudad   : ['',[Validators.required, Validators.minLength(4)]],
      barrio   : ['',[Validators.required, Validators.minLength(4)]],
  })

}


guardar(){

if(this.forma.invalid){
    return Object.values(this.forma.controls).forEach( control =>{
      control.markAsTouched();
    })

}else{

  this.userService.setCreateUsuario(this.forma.value).subscribe(
    response =>{
      //console.log(response);
      //Alert
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Nuevo',
        text: 'Usuario agregado correctamente!!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate( ['/inicio'] );
    },
    error=>{
      console.log(error);
    }
  )

}
}







  /******************************************************************************
   ******************    Validaciones      **************************************
  ******************************************************************************/
  get tipoIDNoValid(){
    return this.forma.get('tipoId').invalid && this.forma.get('tipoId').touched;
  }
  get tipoIDValid(){
    return this.forma.get('tipoId').valid && this.forma.get('tipoId').touched;
  }


  get nombreNoValid(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get nombreValid(){
    return this.forma.get('nombre').valid && this.forma.get('nombre').touched;
  }

  get emailNoValid(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }
  get emailValid(){
    return this.forma.get('email').valid && this.forma.get('email').touched;
  }

  get paisNoValid(){
    return this.forma.get('pais').invalid && this.forma.get('pais').touched;
  }
  get paisValid(){
    return this.forma.get('pais').valid && this.forma.get('pais').touched;
  }

  get barrioNoValid(){
    return this.forma.get('barrio').invalid && this.forma.get('barrio').touched;
  }
  get barrioValid(){
    return this.forma.get('barrio').valid && this.forma.get('barrio').touched;
  }


  get numeroIdNoValid(){
    return this.forma.get('numeroId').invalid && this.forma.get('numeroId').touched;
  }
  get numeroIdValid(){
    return this.forma.get('numeroId').valid && this.forma.get('numeroId').touched;
  }

  get apellidoNoValid(){
    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched;
  }
  get apellidoValid(){
    return this.forma.get('apellidos').valid && this.forma.get('apellidos').touched;
  }



  get numContactoNoValid(){
    return this.forma.get('numCel').invalid && this.forma.get('numCel').touched;
  }
  get numContactoValid(){
    return this.forma.get('numCel').valid && this.forma.get('numCel').touched;
  }

  get ciudadNoValid(){
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
  }
  get ciudadValid(){
    return this.forma.get('ciudad').valid && this.forma.get('ciudad').touched;
  }







}
