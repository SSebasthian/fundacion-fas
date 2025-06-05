import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './compartido/menu/menu.component';
import { FooterComponent } from "./compartido/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent]
})

export class AppComponent {
  title = 'fundacion-fas';
}
