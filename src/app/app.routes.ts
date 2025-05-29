import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { QuienesSomosComponent } from './pagina/quienes-somos/quienes-somos.component';


export const routes: Routes = [
    {path: '',
        component:InicioComponent
    },
    {path: 'inicio',
        component:InicioComponent
    },
    {path: 'quienes-somos',
        component:QuienesSomosComponent
    },
];
