import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { Container } from '../../components/container/container';
import { Cabecalho } from '../../components/cabecalho/cabecalho';
import { Separador } from '../../components/separador/separador';
import { Contato } from '../../components/contato/contato';
import { Busca } from '../../components/busca/busca';
import { ContatoService } from '../../contato-service';
import { ContatoInfo } from '../../model/ContatoInfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Container,
    Cabecalho,
    Separador,
    Contato,
    Busca,
    RouterModule,
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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
