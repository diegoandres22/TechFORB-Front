import { Component } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  saldo:number = 15000;
  ultimosCuatro:Number = 3557;
  nombre:string = "Adams Contreras";
  caduca:string = "05/30"; 
}
