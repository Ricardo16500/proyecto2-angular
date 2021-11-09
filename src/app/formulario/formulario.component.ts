import { Component, OnInit } from '@angular/core';
import{InternalData, SharedService} from '../shared/shared.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  name: string='';
  ci: any='';
  celular: any='';
  data: InternalData[]=[];
  correo: string='';
  direccion: string='';
  mostrar: number=0;
  total: number=0;
  cantt:number=0;
  preciototal:number=0;
  des: number = 0;
  constructor(private shared:SharedService) { }


  onSubmit(){
    this.shared.setNombre(this.name);
    this.shared.setCi(this.ci);
    this.shared.setCelular(this.celular);
    this.shared.setCorreo(this.correo);
    this.shared.setDireccion(this.direccion);
    console.log("aqui imprime");

    console.log(this.shared.getNombre(),this.shared.getCi());
    console.log(this.shared.getDireccion());
    console.log(this.shared.getCorreo());
    console.log(this.shared.getCelular());
    this.mostrar=1;
    this.calculos();
  }
  calculos(){
    this.data = this.shared.getDatos();
    for (let i in this.data){
      this.total+=(this.data[i]['cant'])*(this.data[i]['precio']);
      this.cantt +=this.data[i]['cant'];
    }
    if(this.cantt>3){
      this.des = 15;
      this.preciototal=Math.round((this.total/1.15)*100)/100;

    }
    else{
      this.des = 10;
      this.preciototal=Math.round((this.total/1.10)*100)/100;

    }
  }
}
