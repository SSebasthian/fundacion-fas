import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';

export const routes: Routes = [
    {path: '',
        component:InicioComponent
    },
    {path: 'inicio',
        component:InicioComponent
    },
];
