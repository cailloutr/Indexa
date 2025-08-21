import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import agenda from '../../public/agenda.json'

@Injectable({
  providedIn: 'root'
})
export class ContatoService { 
  private listaDeContatos: Contato[] = []

  constructor(){
    this.listaDeContatos = this.getAllContatos()
  }

  getAllContatos(): Contato[] {
    return this.listaDeContatos = agenda
  }
}
