import { Component, computed, inject, model, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notificacao } from './components/notificacao/notificacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notificacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  exibeNotificacao: WritableSignal<boolean> = signal(true);

  getStatusNotificacao = computed(() => {
    return this.exibeNotificacao();
  });
}
