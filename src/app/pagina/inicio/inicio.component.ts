import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
