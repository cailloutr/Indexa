import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./components/container/container";
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Separador } from "./components/separador/separador";
import { Contato } from './components/contato/contato';
import { ContatoService } from './contato-service';

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
  alfabetp: string = 'abcdefghijklmnopqrstuvwxyz'

  contatoService: ContatoService = inject(ContatoService)
  listaDeContato: Contato[] = []

  constructor(){
    this.listaDeContato = this.contatoService.getAllContatos()
  }
}
