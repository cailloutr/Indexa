import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-busca',
  imports: [],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {

  @Input({ required: true }) buscaTermo!: WritableSignal<string>;

  onchangeText(valor: string) {
    this.buscaTermo.set(valor);
  }
}
