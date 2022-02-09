import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  lancamentos = [
    { "transaction_type" : "RECEITA","description" : "Salário Mensal", "due_date" : "2021-06-10", "payment_date" : null, "amount" : 6500.00, "name" : "João Silva" },
    { "transaction_type" : "RECEITA", "description" : "Serviço Voluntário", "due_date" : "2021-06-22", "payment_date" : null, "amount" : 1500.00, "name" : "João Silva"	},
    { "transaction_type" : "DESPESA", "description" : "Academia", "due_date" : "2021-06-10", "payment_date" : "2021-06-05", "amount" : 100.00, "name" : "João Silva" },
    { "transaction_type" : "DESPESA", "description" : "Conta do Celular", "due_date" : "2021-06-10", "payment_date" : "2021-06-02", "amount" : 69.00, "name" : "João Silva"	},
    { "transaction_type" : "RECEITA", "description" : "Salário mensal", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 6500.00, "name" : "João Silva" },
    { "transaction_type" : "DESPESA", "description" : "Lanche", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 10.20, "name" : "João Silva" },
    { "transaction_type" : "DESPESA", "description" : "Bahamas", "due_date" : "2017-02-10", "payment_date" : "2017-02-10", "amount" : 100.32, "name" : "Maria Rita" },
    { "transaction_type" : "DESPESA", "description" : "Café", "due_date" : "2017-04-10", "payment_date" : "2017-04-10", "amount" : 4.32, "name" : "Maria Rita" },
    { "transaction_type" : "RECEITA", "description" : "Top Club", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 120.00, "name" : "Pedro Santos" },
    { "transaction_type" : "DESPESA", "description" : "Instrumentos", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 1040.32, "name" : "Pedro Santos" },
    { "transaction_type" : "RECEITA", "description" : "CEMIG", "due_date" : "2017-02-10", "payment_date" : "2017-02-10", "amount" : 110.44, "name" : "Ricardo Pereira" },
    { "transaction_type" : "DESPESA", "description" : "Eletrônicos", "due_date" : "2017-04-10", "payment_date" : "2017-04-10", "amount" : 2100.32, "name" : "Ricardo Pereira" },
    { "transaction_type" : "DESPESA", "description" : "DMAE", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 200.30, "name" : "Josué Mariano" },
    { "transaction_type" : "DESPESA", "description" : "Café", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 8.32, "name" : "Josué Mariano" },
    { "transaction_type" : "RECEITA", "description" : "Extra", "due_date" : "2017-03-10", "payment_date" : "2017-03-10", "amount" : 1010.32, "name" : "Pedro Barbosa" },
    { "transaction_type" : "DESPESA", "description" : "Bahamas", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 500.00, "name" : "Henrique Medeiros" },
    { "transaction_type" : "DESPESA", "description" : "Top Club", "due_date" : "2017-03-10", "payment_date" : "2017-03-10", "amount" : 400.32, "name" : "Carlos Santana" },
    { "transaction_type" : "DESPESA", "description" : "Despachante", "due_date" : "2017-06-10", "payment_date" : null, "amount" : 123.64, "name" : "Leonardo Oliveira" },
    { "transaction_type" : "RECEITA", "description" : "Pneus", "due_date" : "2017-04-10", "payment_date" : "2017-04-10", "amount" : 665.33, "name" : "Isabela Martins" }
  ]
}