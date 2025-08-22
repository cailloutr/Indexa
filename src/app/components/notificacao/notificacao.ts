import { Component } from '@angular/core';
import { NotificacaoImpl } from '../../model/notificacaoImpl';

@Component({
  selector: 'app-notificacao',
  imports: [],
  templateUrl: './notificacao.html',
  styleUrl: './notificacao.css'
})
export class Notificacao {

  notificacao: NotificacaoImpl = new NotificacaoImpl(
    0,
    'Título da Notificação',
    'Esta é uma mensagem de notificação de teste.',
    'info',
    5000 // duração de 5 segundos
  );

  constructor() {
    this.notificacao = new NotificacaoImpl(
      this.notificacao.id,
      this.notificacao.titulo,
      this.notificacao.mensagem,
      this.notificacao.tipo,
      this.notificacao.duracao
    );
  }
}
