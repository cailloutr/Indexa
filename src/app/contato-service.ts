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
    return this.listaDeContatos = agenda.map(contato => ({
      id: contato.id,
      nome: contato.nome,
      telefone: contato.telefone,
      email: '',
      rede: '',
      aniversario: '',
      obeservacoes: ''
    }) )
  }

  getFilteredContatos(term: string): ContatoInterface[] {
    return this.listaDeContatos.filter(contato => contato.nome.toLowerCase().includes(term.toLowerCase()) );
  }

  getLastId(): number {
    if (this.listaDeContatos.length === 0) {
      return 0;
    }
    return Math.max(...this.listaDeContatos.map(contato => contato.id));
  }

  addContato(contato: ContatoInterface): void {
    contato.id = this.getLastId() + 1;
    this.listaDeContatos.push(contato);
  }
}
