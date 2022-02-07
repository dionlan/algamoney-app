import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Dionlan'
  adicionado = false;
  @Output('funcCriado') funcionarioAdicionado = new EventEmitter();

  adicionar(){
  console.log(`Adicionando ${this.nome}`)
  this.adicionado = true;

  const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome 
    }

  this.funcionarioAdicionado.emit(funcionario);
  }
}
