import { Notificacao } from './notificacao';

export class NotificacaoImpl implements Notificacao {
    id: number;
    titulo: string;
    mensagem: string;
    tipo: 'info' | 'success' | 'warning' | 'error';
    duracao?: number; // em milissegundos, opcional
    data?: Date; // opcional, para registrar quando a notificação foi criada

    constructor(
        id: number,
        titulo: string, 
        mensagem: string, 
        tipo: 'info' | 'success' | 'warning' | 'error', 
        duracao?: number
    ) {
        this.id = id;
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.tipo = tipo;
        this.duracao = duracao;
        this.data = new Date();
    }
}