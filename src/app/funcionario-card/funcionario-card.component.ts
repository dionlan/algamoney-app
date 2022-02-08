import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
  .card-block {
    text-transform: uppercase;
    color: blue;
  }
`]

})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstilosCartao(){
    return {
      'border-width.px' : this.funcionario.id,
      'background-color' : this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    }
  }
}
