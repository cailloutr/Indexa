export interface Notificacao {
    titulo: string;
    mensagem: string;
    tipo: 'info' | 'success' | 'warning' | 'error';
    duracao?: number; // em milissegundos, opcional
    data?: Date; // opcional, para registrar quando a notificação foi criada
}
