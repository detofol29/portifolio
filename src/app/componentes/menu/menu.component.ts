import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../language-dialog/language-dialog.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private dialog: MatDialog) {}
  
  isMenuOpen = false; // Variável para controlar o estado do menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu status:', this.isMenuOpen);
  }

  openLanguageDialog() {
    this.dialog.open(LanguageDialogComponent, {
      width: '300px',
      data: { currentLanguage: 'Português' } // Opcional: passe dados para o diálogo
    });
  }
}