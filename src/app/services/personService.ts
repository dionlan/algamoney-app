import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get<any>('assets/persons.json')
    .toPromise()
    .then(res => <Person[]>res.data)
    .then(data => { return data; });
  }
}