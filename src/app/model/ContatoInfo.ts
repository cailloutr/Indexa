import { ContatoInterface } from './contatoInterface';

export class ContatoInfo implements ContatoInterface {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    rede: string;
    aniversario: string;
    obeservacoes: string;

    constructor(
        id: number = 0,
        nome: string = '',
        telefone: string = '',
        email: string = '',
        rede: string = '',
        aniversario: string = '',
        obeservacoes: string = ''
) {
        this.id = id;
        this.nome = nome
        this.telefone = telefone
        this.email = email;
        this.rede = rede
        this.aniversario = aniversario
        this.obeservacoes = obeservacoes
    }


}