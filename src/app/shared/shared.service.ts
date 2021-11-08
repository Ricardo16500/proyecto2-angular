import { Injectable } from '@angular/core';

export class InternalData{
  constructor(public namecel:string, public cant:any, public precio:number){
    this.namecel = namecel;
    this.cant=cant;
    this.precio = precio;
  }
}
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  datos: InternalData[] = [];
  nombre: string="";
  ci:any=0;
  celular:any=0;
  correo:string = "";
  direccion:string="";
  constructor() { }
  setDatos(data: InternalData[]){
    this.datos = data;
  }
  getDatos(){
    return this.datos;
  }
  setCi(data: any){
    this.ci=data;
  }
  getCi(){
    return this.ci;
  }
  setCelular(data: any){
    this.celular = data;
  }
  getCelular(){
    return this.celular
  }
  setNombre(data: string){
    this.nombre=data;
  }
  getNombre(){
    return this.nombre
  }
  setCorreo(data: string){
    this.correo=data;
  }
  getCorreo(){
    return this.correo;
  }
  setDireccion(data: string){
    this.direccion=data;
  }
  getDireccion(){
    return this.direccion;
  }

}
