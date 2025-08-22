import { Routes } from '@angular/router';
import { ContatoFormulario } from './pages/contato-formulario/contato-formulario';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Agenda de Contatos'
    },
    {
        path: 'novo-contato',
        component: ContatoFormulario,
        title: 'Novo Contato'
    }
];

export default routes;
