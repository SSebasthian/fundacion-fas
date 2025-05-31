import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { Router } from '@angular/router';



export interface Credencial {  
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  private autenticador : Auth = inject(Auth);
  private router: Router = inject(Router);

  constructor() { }

  readonly estadoIngresoSistema$ = authState(this.autenticador);

  accesoCorreoContrasena(credencial: Credencial) {
    return signInWithEmailAndPassword(
      this.autenticador,
      credencial.email,
      credencial.password
    );
  }
}
