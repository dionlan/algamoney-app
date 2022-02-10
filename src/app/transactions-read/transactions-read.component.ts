import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TransactionService } from '../services/transactionService';
import { PrimeNGConfig } from 'primeng/api';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transactions-read',
  templateUrl: './transactions-read.component.html',
  styleUrls: ['./transactions-read.component.css']
})
export class TransactionsReadComponent implements OnInit {

  transactionDialog: boolean = false;
  submitted: boolean = false;
  transactions: Transaction[] = [];
  ativaLoadingButtonSearch: boolean = false;
  tipoTransaction: any [] = [];

  transaction: Transaction = {
      id: '',
      transaction_type: '',
      description: '',
      due_date: '',
      payment_date: '',
      amount: '',
      name: ''
  };

  constructor(private transactionService: TransactionService, 
              private messageService: MessageService, 
              private confirmacaoService: ConfirmationService,
              private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().then(data => this.transactions = data);
    this.primengConfig.ripple = true;
    this.tipoTransaction = [
      { label: 'RECEITA', value: 'RECEITA' },
      { label: 'DESPESA', value: 'DESPESA' }
    ]
  }

  openNew() {
    this.transaction = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' };
    this.submitted = false;
    this.transactionDialog = true;
  }

  editTransaction(transaction: Transaction) {
    this.transaction = {...transaction};
    this.transactionDialog = true;
  }

  deleteTransaction(transaction: Transaction) {
    this.confirmacaoService.confirm({
        message: 'Are you sure you want to delete ' + transaction.id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.transactions = this.transactions.filter(val => val.id !== transaction.id);
            this.transaction = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' }
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Transação Excluída', life: 3000});
        }
    });
  }

  hideDialog() {
    this.transactionDialog = false;
    this.submitted = false;
  }

  saveTransaction() {
    this.submitted = true;

    if (this.transaction.name.trim()) {
      if (this.transaction.id) {
        this.transactions[this.findIndexById(this.transaction.id)] = this.transaction;
        this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Lançamento Atualizado', life: 3000});
      }

      else {
        this.transaction.id = this.createId();
        this.transactions.push(this.transaction);
        this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Lancaçemento Salvo', life: 3000});
      }

      this.transactions = [...this.transactions];
      this.transactionDialog = false;
      this.transaction = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' };
    }
  }
  findIndexById(id: string): number {
    let index = -1;
      for (let i = 0; i < this.transactions.length; i++) {
          if (this.transactions[i].id === id) {
              index = i;
              break;
          }
      }
    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    return id;
  }
}
