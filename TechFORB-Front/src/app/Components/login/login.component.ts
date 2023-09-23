import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAPIService } from 'src/app/services/DataAPIService';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  data: any[] = [];
  user: object = {};
  mostrarElemento: boolean = true;
  email: string = '';
  Code: string = '';
  // formLogin!: FormGroup;



  constructor(private router: Router, private ApiService: DataAPIService) { }

  submitForm(event: Event) {


    for (let i = 0; i < this.data.length; i++) {

      if (this.data[i].document == this.email || this.data[i].email === this.email) {

        if (this.data[i].password === this.Code) {

          event.preventDefault();
          this.router.navigate(['/home']);

        } else {
          alert("Clave inválida");
          return;
        }
      } else {

        alert("Clave o email inválido");
      }

    }

  }

  registrar(event: Event) {

    event.preventDefault();
    this.mostrarElemento = !this.mostrarElemento;
  }

  ngOnInit(): void {

    this.ApiService.getUsers().subscribe(data => {
      this.data = data;

      //   this.formLogin = this.formBuilder.group({
      //     Email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      //     Code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      //   });

    })

  }

}
