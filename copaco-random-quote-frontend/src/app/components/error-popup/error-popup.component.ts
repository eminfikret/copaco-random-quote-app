import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-error-popup',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './error-popup.component.html',
  styleUrl: './error-popup.component.css'
})
export class ErrorPopupComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
