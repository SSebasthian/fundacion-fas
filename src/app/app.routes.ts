import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { QuienesSomosComponent } from './pagina/quienes-somos/quienes-somos.component';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { PerfilComponent } from './pagina/autenticacion/perfil/perfil.component';


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
    {path: 'acceso',
        component:AccesoComponent
    },
    {path: 'perfil',
        component:PerfilComponent
    },
];
