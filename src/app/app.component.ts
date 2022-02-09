import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Lancamento } from './models/lancamento';
import { LancamentoService } from './services/lancamentoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lancamentoDialog: boolean = false;
  submitted: boolean = false;
  lancamentos: Lancamento[] = [];

  lancamento: Lancamento = {
      id: '',
      transaction_type: '',
      description: '',
      due_date: '',
      payment_date: '',
      amount: '',
      name: ''
  };

  constructor(private lancamentoService: LancamentoService, private messageService: MessageService, private confirmacaoService: ConfirmationService) {}

  ngOnInit() {
    this.lancamentoService.getLancamentos().then(data => this.lancamentos = data);
  }

  openNew() {
    this.lancamento = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' };
    this.submitted = false;
    this.lancamentoDialog = true;
  }

  editLancamento(lancamento: Lancamento) {
    this.lancamento = {...lancamento};
    this.lancamentoDialog = true;
  }

  deleteLancamento(lancamento: Lancamento) {
    this.confirmacaoService.confirm({
        message: 'Are you sure you want to delete ' + lancamento.id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.lancamentos = this.lancamentos.filter(val => val.id !== lancamento.id);
            this.lancamento = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' }
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
    });
  }

  hideDialog() {
    this.lancamentoDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.lancamento.name.trim()) {
      if (this.lancamento.id) {
        this.lancamentos[this.findIndexById(this.lancamento.id)] = this.lancamento;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }

      else {
        this.lancamento.id = this.createId();
        this.lancamentos.push(this.lancamento);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.lancamentos = [...this.lancamentos];
      this.lancamentoDialog = false;
      this.lancamento = {transaction_type: '', description:'', due_date: '', payment_date: '', amount: '', name: '' };
    }
  }
  findIndexById(id: string): number {
    let index = -1;
      for (let i = 0; i < this.lancamentos.length; i++) {
          if (this.lancamentos[i].id === id) {
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