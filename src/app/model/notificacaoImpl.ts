import { Notificacao } from './notificacao';

export class NotificacaoImpl implements Notificacao {
    titulo: string;
    mensagem: string;
    tipo: 'info' | 'success' | 'warning' | 'error';
    duracao?: number; // em milissegundos, opcional
    data?: Date; // opcional, para registrar quando a notificação foi criada

    constructor(titulo: string, mensagem: string, tipo: 'info' | 'success' | 'warning' | 'error', duracao?: number) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.tipo = tipo;
        this.duracao = duracao;
        this.data = new Date();
    }
}