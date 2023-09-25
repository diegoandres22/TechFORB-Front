import { JsonpInterceptor } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataAPIService } from 'src/app/services/DataAPIService';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private ApiService: DataAPIService,){}

  saldo!:number;
  ultimosCuatro:Number = 3557;
  nombre!:string ;
  caduca:string = "05/30"; 
  id!:number;
  usuarios: any[] = [];

  ngOnInit() : void{

    let localUserStr = localStorage.getItem("User");

    if (localUserStr !== null) {

      let localUser = JSON.parse(localUserStr);

      this.id = localUser.id;
      this.nombre = localUser.name;
      this.saldo = localUser.balance;
    }
    
    this.ApiService.getUsers().subscribe(data => {
      
      for (let i = 0; i < data.length; i++) {
        
        if (data[i].id == this.id) {
          localStorage.removeItem("User")
          localStorage.setItem("User", JSON.stringify(data[i]))
        }
        
      }


    })

  }

}
