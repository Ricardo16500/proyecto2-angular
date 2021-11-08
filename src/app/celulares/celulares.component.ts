import { Component, OnInit } from '@angular/core';
import{InternalData, SharedService} from '../shared/shared.service';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  cant1:any=0;
  cant2:any=0;
  cant3:any=0;
  cant4:any=0;
  cant5:any=0;
  cant6:any=0;
  cant7:any=0;
  cant8:any=0;
  cantidades:Array<any>=[];
  total:InternalData[]=[];
  precios:number[]=[5600,7500,3500,1530,1600,6800,2600,4950];
  marcas:Array<string>=["REDMI 10","iPHONE 13 PRO MAX","G9 PLAY","REALME 5 PRO",
"HUAWEI Y9 PRIME 2019","S21 ULTRA","HONOR 20","HUAWEI P40 PRO" ];

  constructor(private shared:SharedService) { }

  ngOnInit(): void {

  }
  aniadir1(){
    this.cant1++;
  }
  aniadir2(){
    this.cant2++;
  }
  aniadir3(){
    this.cant3++;
  }
  aniadir4(){
    this.cant4++;
  }
  aniadir5(){
    this.cant5++;
  }
  aniadir6(){
    this.cant6++;
  }
  aniadir7(){
    this.cant7++;
  }
  aniadir8(){
    this.cant8++;
  }
  aniadirfinal(){
    this.cantidades.push(this.cant1,this.cant2,this.cant3,this.cant4,
      this.cant5,this.cant6,this.cant7,this.cant8);
    for (let i in this.marcas){
      this.total.push({namecel:this.marcas[i],cant:this.cantidades[i],precio:this.precios[i]});
    }
    this.shared.setDatos(this.total);

  }

}
