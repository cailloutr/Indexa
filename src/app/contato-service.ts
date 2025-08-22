import { Injectable } from '@angular/core';
import { ContatoInterface } from './contatoInterface';

import agenda from '../../public/agenda.json'

@Injectable({
  providedIn: 'root'
})
export class ContatoService { 
  private listaDeContatos: ContatoInterface[] = []

  constructor(){
    this.listaDeContatos = this.getAllContatos()
  }

  getAllContatos(): ContatoInterface[] {
    return this.listaDeContatos = agenda
  }
}
