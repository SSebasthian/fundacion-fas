import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-vinculacion',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    
  ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {

}
