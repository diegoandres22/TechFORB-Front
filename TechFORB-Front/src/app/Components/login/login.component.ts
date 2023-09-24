import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAPIService } from 'src/app/services/DataAPIService';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  data: any[] = [];
  newUser: any = {
    name: '',
    email: '',
    password: '',
    document: 0,
    balance: 1
  };
  mostrarElemento: boolean = true;
  email: string = '';
  Code: string = '';
  formLogin!: FormGroup;
  formRegister!: FormGroup;


  constructor(private router: Router, private ApiService: DataAPIService, private formBuilder: FormBuilder) { }

  submitForm(event: Event) {
    event.preventDefault();

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].email == this.formLogin.value.email || this.data[i].document == this.formLogin.value.email) {
        let pruebaPass: String = this.data[i].password;
        if (pruebaPass === this.formLogin.value.code) {
          event.preventDefault();
          this.router.navigate(['/home']);
          return;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Clave invalida'
          })

          return;
        }
      }
    }

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email o documento invalido'
    })

  }

  registerForm(event: Event) {
    event.preventDefault();
    let user: object = {

      name: String(this.newUser.name),
      password: String(this.newUser.password),
      email: String(this.newUser.correo),
      document: Number(this.newUser.document),
      balance: 1

    };
    for (let i = 0; i < this.data.length; i++) {

      if (this.data[i].email == this.newUser.correo) {


        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Este correo ya fué registrado'
        })
        return;
      }
      if (this.data[i].document === this.newUser.document) {


        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Este documento ya pertenece a una cuenta'
        })
        return;
      }

    }

    this.ApiService.postUser(user).subscribe(user => {

    })

    Swal.fire(
      'Buen trabajo',
      'Cuenta creada con exito!!',
      'success'
    )
    this.formRegister.reset();
  }


  registrar(event: Event) {

    event.preventDefault();
    this.mostrarElemento = !this.mostrarElemento;
  }

  ngOnInit(): void {


    this.ApiService.getUsers().subscribe(data => {
      this.data = data;

    })

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });

    this.formRegister = this.formBuilder.group({
      document: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(2), Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      correo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    });

  }
  updateUser(event: Event, field: string) {
    const value = (event.target as HTMLInputElement).value;

    if (field === 'document') {
      this.newUser[field] = parseInt(value, 10);
    } else {
      this.newUser[field] = value;
    }
  }




}
