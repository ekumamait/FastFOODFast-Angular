import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public snackBar: MatSnackBar) { }

  showSuccess = (message) => {
    this.snackBar.open(message, 'close',
    {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['success-snackbar'] });
  }

  showError = (message) => {
    this.snackBar.open(message, 'close',
    {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['error-snackbar']} );
  }

  showWarning = (message) => {
    this.snackBar.open(message, 'close',
    {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['warning-snackbar'] });
  }
}
