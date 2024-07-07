import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPopupComponent } from '../../components/popup/error-popup/error-popup.component';
import { SuccessPopupComponent } from '../../components/popup/success-popup/success-popup.component';

@Injectable({
  providedIn: 'root'
})
export class InternetStatusService {
  constructor(private snackBar: MatSnackBar) {
    this.checkInternetConnection();
  }

  private checkInternetConnection() {
    window.addEventListener('offline', () => {
      this.showPopup('No Internet Connection', 'error');
    });

    window.addEventListener('online', () => {
      this.showPopup('Connected to the Internet', 'success');
    });
  }

  private showPopup(message: string, type: 'error' | 'success') {
    const component = type === 'error' ? ErrorPopupComponent : SuccessPopupComponent;
    this.snackBar.openFromComponent(component, {
      data: { message },
      duration: 50000,
      panelClass: type === 'error' ? 'error-popup-container' : 'success-popup-container',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
