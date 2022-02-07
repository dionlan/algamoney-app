import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Dionlan'
  adicionado = false;

  adicionar(){
  console.log(`Adicionando ${this.nome}`)
  this.adicionado = true;

  }
}