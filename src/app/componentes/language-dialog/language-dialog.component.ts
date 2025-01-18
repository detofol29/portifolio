import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.css'],
  imports: [CommonModule]
})
export class LanguageDialogComponent {
  languages: string[] = ['Português', 'Inglês', 'Espanhol', 'Francês'];

  constructor(
    public dialogRef: MatDialogRef<LanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  selectLanguage(language: string) {
    console.log(`Idioma selecionado: ${language}`);
    this.dialogRef.close(language); // Fecha o diálogo e retorna o idioma selecionado
  }
}
