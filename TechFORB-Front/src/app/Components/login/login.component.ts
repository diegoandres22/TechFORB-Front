import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {


  constructor(private router: Router) { }

  mostrarElemento: boolean = true;
  registrar(event:Event) {

    event.preventDefault();
    this.mostrarElemento = !this.mostrarElemento;
  }
  
  home(event:Event){
    event.preventDefault();
    this.router.navigate(['/home']);
  }

}
