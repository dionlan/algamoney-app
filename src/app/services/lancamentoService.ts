import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../models/lancamento';

@Injectable()
export class LancamentoService {

  lancamentos: Lancamento[] = []

  constructor(private http: HttpClient) { }

  getLancamentos() {
    return this.http.get<any>('assets/lancamentos.json')
    .toPromise()
    .then(res => <Lancamento[]>res.data)
    .then(data => { return data; });
  }
}