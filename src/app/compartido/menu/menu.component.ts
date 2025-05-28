import { Component,  ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuAbierto: boolean = false;
  @ViewChild('menuCheckbox') menuCheckbox!: ElementRef<HTMLInputElement>;

   menuHamburguesa(){
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void{
    this.menuAbierto = false;

    // Si el checkbox está marcado, lo desmarcamos
    if (this.menuCheckbox?.nativeElement?.checked) {
      this.menuCheckbox.nativeElement.checked = false;
    }
  }
}
