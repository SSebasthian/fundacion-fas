import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { QuienesSomosComponent } from './pagina/quienes-somos/quienes-somos.component';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { PerfilComponent } from './pagina/autenticacion/perfil/perfil.component';
import { estadoPrivado, estadoPublico } from './arquitectura/guardia/enrutamiento.guard';
import { ProgramasComponent } from './pagina/programas/programas.component';



export const routes: Routes = [
    {path: '',
        component:InicioComponent,
        canActivate: [estadoPublico],
    },
    {path: 'inicio',
        component:InicioComponent
    },
    {path: 'quienes-somos',
        component:QuienesSomosComponent
    },
    {path: 'acceso',
        component:AccesoComponent,
        canActivate: [estadoPublico],
    },
    {path: 'perfil',
        component:PerfilComponent,
        canActivate: [estadoPrivado],
    },
    {path: 'programas',
        component:ProgramasComponent,
        canActivate: [estadoPublico],
    },
];
