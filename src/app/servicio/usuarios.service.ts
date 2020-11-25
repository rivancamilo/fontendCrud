import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'https://backendcrud.rj.r.appspot.com/api/';

  constructor(private http:HttpClient) { }
  /*****************************************************
    Listamos los Usuarios
  *****************************************************/
  getUsuarios(){
    return this.http.get(`${this.url}usuarios`);
  }

  getUsuarioEdit(id:string){
    return this.http.get(`${this.url}editarusuario/${id}`).pipe( map( data => {
      return data['usuario'];
    }));
  }
  getPaises(){
    return this.http.get(`${this.url}usuarios`);
  }

  /*****************************************************
    Agregamos nuevo Usuario
  *****************************************************/
  setCreateUsuario(usuario){
    let datos = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(`${this.url}nuevousuario`, datos , {headers:headers});
  }

  /*****************************************************
    Borramos un Usuario
  *****************************************************/
  deleteUsuario(id){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(`id del usuario para eliminar ${id}`)
    return this.http.delete(`${this.url}borrarusuario/${id}`, {headers:headers});
  }


  /*****************************************************
    Actualizamos un Usuario
  *****************************************************/
  updateUsuario(id:string,usuario ){
    let datosNuevos = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(`${this.url}editarusuario/${id}`,datosNuevos , {headers:headers});
  }





}
