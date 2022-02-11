import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Person } from '../models/person';
import { PersonService } from '../services/personService';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})
export class PersonReadComponent implements OnInit {

  personDialog: boolean = false;
  submitted: boolean = false;
  persons: Person[] = [];
  ativaLoadingButtonSearch: boolean = false;
  active: any [] = [];

  person: Person = {
      id: '',
      name: '',
      district: '',
      state: '',
      active: ''
  };

  constructor(private personService: PersonService, 
              private messageService: MessageService, 
              private confirmacaoService: ConfirmationService,
              private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.personService.getPersons().then(data => this.persons = data);
    this.primengConfig.ripple = true;
    this.active = [
      { label: 'ATIVO', value: 1 },
      { label: 'INATIVO', value: 0 }
    ]
  }
  openNew() {
    this.person = {name: '', district: '', state: '', active: '' };
    this.submitted = false;
    this.personDialog = true;
  }

  editPerson(person: Person) {
    this.person = {...person};
    this.personDialog = true;
  }

  deletePerson(person: Person) {
    this.confirmacaoService.confirm({
        message: 'Are you sure you want to delete ' + person.id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.persons = this.persons.filter(val => val.id !== person.id);
            this.person = {name: '', district: '', state: '', active: '' };
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Pessoa Excluída', life: 3000});
        }
    });
  }

  hideDialog() {
    this.personDialog = false;
    this.submitted = false;
  }

  savePerson() {
    this.submitted = true;

    if (this.person.name.trim()) {
      if (this.person.id) {
        this.persons[this.findIndexById(this.person.id)] = this.person;
        this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pessoa Atualizada', life: 3000});
      }

      else {
        this.person.id = this.createId();
        this.persons.push(this.person);
        this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Perssoa Salva', life: 3000});
      }

      this.persons = [...this.persons];
      this.personDialog = false;
      this.person = {name: '', district: '', state: '', active: '' };
    }
  }
  findIndexById(id: string): number {
    let index = -1;
      for (let i = 0; i < this.persons.length; i++) {
          if (this.persons[i].id === id) {
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

