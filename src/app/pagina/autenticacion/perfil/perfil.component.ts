import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorService } from '../../../arquitectura/servicio/autenticador.service';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  private _router = inject(Router);
  private autenticadorServicio = inject(AutenticadorService);

  //CERRA SESION TRAE METODO DE SERVICIO
  async cerrarSesion(): Promise<void> {
    try {
      await this.autenticadorServicio.cerrarSesion();
      this._router.navigateByUrl('/acceso');
    } catch (error) {
      console.log(error);
    }
  }
}
