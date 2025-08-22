import { ContatoInterface } from './contatoInterface';

export class ContatoInfo implements ContatoInterface {
    id: number;
    nome: string;
    telefone: string;

    constructor(id: number, nome: string, telefone: string) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
    }
}