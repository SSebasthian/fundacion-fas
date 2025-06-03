import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactoService } from '../../arquitectura/servicio/contacto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-vinculacion',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {
  formularioContacto: FormGroup;

   constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.formularioContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
  if (this.formularioContacto.valid) {
    const datos = {
      ...this.formularioContacto.value,
      fecha: new Date()
    };

    this.contactoService.guardarMensaje(datos)
      .then(() => {
        alert('Mensaje enviado correctamente');
        this.formularioContacto.reset();
      })
      .catch((error) => {
        console.error('Error al enviar mensaje', error);
      });
  }
}
}
