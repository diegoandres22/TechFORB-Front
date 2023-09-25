import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataAPIService } from 'src/app/services/DataAPIService';
import Swal from 'sweetalert2';

interface Transaction {
  sender: number;
  addressee: number;
  date: string;
  amount: number;
}
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {


  vewOperations: boolean = true;

  // FORMULARIO
  count!: number;
  address!: number;

  // Info del usuario
  cbu!: number;
  balance!: number;
  name!: string;
  email!: string;
  password!: string;
  document!: string;
  currentDate!: string;
  transactions: Transaction[] = [];

  formTransacction!: FormGroup;


  constructor(private ApiService: DataAPIService, private formBuilder: FormBuilder) {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    this.currentDate = `${month} ${day} ${year}`;
  }


  ngOnInit(): void {

    let userId = localStorage.getItem("User")

    if (userId !== null) {
      let userIde = JSON.parse(userId);
      this.cbu = userIde.id,
        this.name = userIde.name,
        this.email = userIde.email,
        this.password = userIde.password,
        this.document = userIde.document,
        this.balance = userIde.balance
    }

    this.ApiService.getUsers().subscribe(data => {

      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.cbu) {
          this.balance = data[i].balance
        }
      }

    })
    this.ApiService.getTransfer().subscribe(data => {
      const filteredTransactions: Transaction[] = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].sender == this.cbu || data[i].addressee == this.cbu) {
          filteredTransactions.push(data[i]);
        }
      }
      this.transactions = filteredTransactions.reverse();

    });

    this.formTransacction = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.maxLength(8)]],
      address: ['', [Validators.required, Validators.maxLength(8)]],

    });
  }





  fVewOperations(event: Event, state: boolean) {

    if (state == false) {

      this.vewOperations = false;
    }
    if (state == true) {

      this.vewOperations = true;
    }
  }

  newTransfer() {

    this.ApiService.getUsers().subscribe(data => {

      for (let i = 0; i < data.length; i++) {

        if (this.address == this.cbu) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Esa es tu cuenta !'
          })
          return;
        }
        if (data[i].id == this.address) {

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
          })

          swalWithBootstrapButtons.fire({
            title: 'Seguro quieres transferirle a ' + data[i].name,
            text: this.count + " $",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Transferir !',
            cancelButtonText: 'Volver',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Completado',
                'Transferencia realizada'
              )
              //------------ Transferencia !---------------------
              // Otro usuario
              let otherUser: object = {
                id: data[i].id,
                name: data[i].name,
                email: data[i].email,
                password: data[i].password,
                document: data[i].document,
                balance: data[i].balance + this.count
              }
              this.ApiService.putUser(this.address, otherUser).subscribe(data => {

              })

              //  Usuario principal
              let otherUser2: object = {
                id: this.cbu,
                name: this.name,
                email: this.email,
                password: this.password,
                document: this.document,
                balance: this.balance - this.count
              }
              this.ApiService.putUser(this.cbu, otherUser2).subscribe(data => {

              })


              localStorage.removeItem("User")
              localStorage.setItem("User", JSON.stringify(otherUser2))

              let newTrans: object = {

                sender: String(this.cbu),
                addressee: String(this.address),
                date: String(this.currentDate),
                amount: this.count

              }

              this.ApiService.postTransfer(newTrans).subscribe(data => {

              })
              this.reloadPageAfter3Seconds();
              return
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Transacción cancelada'
              )
            }
          })
          return;
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario no encontrado'
          })
        }
      }
    })

  }
  reloadPageAfter3Seconds() {
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  dataTransfer(event: Event, field: string) {
    const value = (event.target as HTMLInputElement).value;
    this.address = Number(value);

  }
  dataTransfer2(event: Event, field: string) {
    const value = (event.target as HTMLInputElement).value;
    this.count = Number(value);
  }

}
