export interface Notificacao {
    id: number; // identificador único da notificação
    titulo: string;
    mensagem: string;
    tipo: string; // 'info', 'success', 'warning', 'error'
    duracao?: number; // em milissegundos, opcional
    data?: Date; // opcional, para registrar quando a notificação foi criada
}
