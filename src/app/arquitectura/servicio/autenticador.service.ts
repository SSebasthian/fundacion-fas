import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword} from '@angular/fire/auth';


export interface Credencial {  
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  private autenticador : Auth = inject(Auth);

  constructor() { }

  accesoCorreoContrasena(credencial: Credencial) {
    return signInWithEmailAndPassword(
      this.autenticador,
      credencial.email,
      credencial.password
    );
  }
}
