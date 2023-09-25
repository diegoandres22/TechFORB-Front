import { Component } from '@angular/core';
import { DataAPIService } from '../services/DataAPIService';

interface Transaction {
  sender: number;
  addressee: number;
  date: string;
  amount: number;
}

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  transactions: Transaction[] = [];

  cbu!: number;

  constructor(private ApiService: DataAPIService) { }

  ngOnInit(): void {

    let userId = localStorage.getItem("User")

    if (userId !== null) {
      let userIde = JSON.parse(userId);
      this.cbu = userIde.id
    }
    
    this.ApiService.getTransfer().subscribe(data => {
      const filteredTransactions: Transaction[] = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].sender == this.cbu || data[i].addressee == this.cbu) {
          filteredTransactions.push(data[i]);
        }
      }
      this.transactions = filteredTransactions.reverse();

    });
  }
}
