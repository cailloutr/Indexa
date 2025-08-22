import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./components/container/container";
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Separador } from "./components/separador/separador";
import { ContatoService } from './contato-service';
import { ContatoInfo } from './ContatoInfo';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Container, 
    Cabecalho, 
    Separador,
    Contato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  contatoService: ContatoService = inject(ContatoService)
  listaDeContato: ContatoInfo[] = []

  getListaDeContatoFiltrada(letra: string): ContatoInfo[] {
    return this.listaDeContato.filter(contato => contato.nome[0].toUpperCase() === letra.toUpperCase());
  } 

  constructor(){
    this.alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.listaDeContato = this.contatoService.getAllContatos()
  }
}
