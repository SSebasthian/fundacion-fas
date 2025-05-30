import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  valorSeleccionado: string | null = null;

  seleccionarValor(valor: string) {
    this.valorSeleccionado = valor;
  }
}
