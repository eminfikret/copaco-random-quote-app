import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-success-popup',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './success-popup.component.html',
  styleUrl: './success-popup.component.css'
})
export class SuccessPopupComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
