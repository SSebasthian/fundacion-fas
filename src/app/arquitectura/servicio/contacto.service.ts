import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import Contacto from '../../arquitectura/interface/contacto.interface';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

    private funcionCorreoURL = 'https://us-central1-fundacion-fas.cloudfunctions.net/enviarCorreo'; // Cambia TU_PROYECTO


  constructor(private firestore: Firestore, private http: HttpClient) {}

  async guardarMensaje(contacto: Contacto): Promise<void> {
    console.log('Guardando en Firestore y enviando correo:', contacto);

    // 1. Guardar en Firestore
    const ref = collection(this.firestore, 'contactosVinculacion');
    await addDoc(ref, contacto);

    // 2. Enviar correo con Cloud Function
    await firstValueFrom(this.http.post(this.funcionCorreoURL, contacto));
  }
}
