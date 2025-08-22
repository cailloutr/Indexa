import { Component, computed, inject, model, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./components/container/container";
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Separador } from "./components/separador/separador";
import { ContatoService } from './contato-service';
import { ContatoInfo } from './ContatoInfo';
import { Contato } from './components/contato/contato';
import { Busca } from './components/busca/busca';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador,
    Contato,
    Busca
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  contatoService: ContatoService = inject(ContatoService)
  termoBusca: WritableSignal<string> = signal('');

  listaDeContato: ContatoInfo[] = []

  listaFiltrada = computed(() => this.getListaDeContatoFiltradaPorTermo()

  );

  getListaDeContatoFiltrada(letra: string): ContatoInfo[] {
    return this.listaFiltrada().filter(contato => contato.nome[0].toUpperCase() === letra.toUpperCase())
  }

  getListaDeContatoFiltradaPorTermo(): ContatoInfo[] {
    const termo = this.termoBusca().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (!termo) return this.listaDeContato;
    return this.listaDeContato.filter(contato =>
      contato.nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(termo));
  }

  constructor() {
    this.alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.listaDeContato = this.contatoService.getAllContatos();
  }
}
