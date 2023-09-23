import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAPIService } from 'src/app/services/DataAPIService';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  data: any[] = [];

  constructor(private router: Router, private ApiService: DataAPIService) { }

  mostrarElemento: boolean = true;
  registrar(event: Event) {

    event.preventDefault();
    this.mostrarElemento = !this.mostrarElemento;
  }

  ngOnInit(): void {
    this.ApiService.getUsers().subscribe(data =>{
      this.data = data;

      const primerObjeto = this.data[0];
      const nombreDelPrimerObjeto = primerObjeto.nombre; // Reemplaza "nombre" con el nombre real del atributo
      console.log(nombreDelPrimerObjeto);

      console.log(this.data);
      
    })
  }
  // home(event: Event) {
  //   event.preventDefault();
  //   this.router.navigate(['/home']);
  // }

}
