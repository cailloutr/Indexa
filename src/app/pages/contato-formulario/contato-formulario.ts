import { Component, inject } from '@angular/core';
import { Container } from "../../components/container/container";
import { Separador } from "../../components/separador/separador";
import { ContatoInfo } from '../../model/ContatoInfo';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContatoService } from '../../contato-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-formulario',
  imports: [Container, Separador, ReactiveFormsModule],
  templateUrl: './contato-formulario.html',
  styleUrl: './contato-formulario.css'
})
export class ContatoFormulario {

  contatoService: ContatoService
  router = inject(Router);

  contatoForm = new FormGroup({
    id: new FormControl(0),
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    redes: new FormControl(''),
    aniversario: new FormControl(''),
    obeservacoes: new FormControl(''),
  })

  salvaContato() {
    console.warn(this.contatoForm.value);
    const contato = this.contatoForm.value as ContatoInfo;
    this.contatoService.addContato(contato);
    this.limparFormulario();
  }

  limparFormulario() {
    this.contatoForm.reset();
  }

  constructor() {
    this.contatoService = inject(ContatoService);
  }
}
