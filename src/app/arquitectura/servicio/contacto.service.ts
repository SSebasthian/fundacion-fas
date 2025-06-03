import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Contacto from '../../arquitectura/interface/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private firestore: Firestore) {}

  guardarMensaje(contacto: Contacto) {
  console.log('Guardando en contactosVinculacion:', contacto); // Verifica que aparece en consola
  const ref = collection(this.firestore, 'contactosVinculacion');
  return addDoc(ref, contacto);
}
}
