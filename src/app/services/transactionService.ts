import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<any>('assets/transactions.json')
    .toPromise()
    .then(res => <Transaction[]>res.data)
    .then(data => { return data; });
  }
}