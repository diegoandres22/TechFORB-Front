import { Component } from '@angular/core';
import { DataAPIService } from 'src/app/services/DataAPIService';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private ApiService: DataAPIService,) { }
  saldo!: number;
  ultimosCuatro: Number = 3557;
  nombre!: string;
  caduca: string = "05/30";
  id!: number;
  cbu!: number;
  expenses!: number;
  income!: number;

ngOnInit():void{
  let localUserStr = localStorage.getItem("User");

  if (localUserStr !== null) {

    let localUser = JSON.parse(localUserStr);

    this.id = localUser.id;
    this.nombre = localUser.name;
    this.saldo = localUser.balance;
    this.cbu = localUser.id
  }

  this.ApiService.getUsers().subscribe(data => {

    for (let i = 0; i < data.length; i++) {

      if (data[i].id == this.id) {
        localStorage.removeItem("User")
        localStorage.setItem("User", JSON.stringify(data[i]))
      }

    }


  })

  this.ApiService.getTransfer().subscribe(data => {

    this.expenses = 0;
    this.income = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].sender == this.cbu) {
        this.expenses += data[i].amount;

      }
      if (data[i].addressee == this.cbu) {

        this.income += data[i].amount
      }
    }


  });


}
}


