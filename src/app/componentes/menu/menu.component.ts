import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../language-dialog/language-dialog.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] 
})
export class MenuComponent {

  constructor(private dialog: MatDialog) {}

  isMenuOpen = false; 
  selectedLanguage: string | undefined; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu status:', this.isMenuOpen);
  }

  openLanguageDialog() {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
      width: '300px',
      data: { currentLanguage: 'Português' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedLanguage = result;
        console.log(`Idioma selecionado: ${result}`);
      }
    });
  }
}
