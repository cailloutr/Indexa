import { Injectable } from '@angular/core';
import agenda from '../../public/agenda.json'
import { ContatoInfo } from './model/ContatoInfo';

@Injectable({
  providedIn: 'root'
})
export class ContatoService { 
  private listaDeContatos: ContatoInfo[] = []

  constructor(){
    this.listaDeContatos = this.getAllContatos()
  }

  getAllContatos(): ContatoInfo[] {
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

  getFilteredContatos(term: string): ContatoInfo[] {
    return this.listaDeContatos.filter(contato => contato.nome.toLowerCase().includes(term.toLowerCase()) );
  }

  getLastId(): number {
    if (this.listaDeContatos.length === 0) {
      return 0;
    }
    return Math.max(...this.listaDeContatos.map(contato => contato.id));
  }

  addContato(contato: ContatoInfo): void {
    contato.id = this.getLastId() + 1;
    this.listaDeContatos.push(contato);
  }
}
