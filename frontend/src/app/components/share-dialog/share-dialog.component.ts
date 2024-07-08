import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ShareButtonDirective } from 'ngx-sharebuttons';
import {Quote} from "../../models/quote/quote.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-share-dialog',
  standalone: true,
  imports: [
    ShareButtonDirective,
    MatIconModule,
    MatButton
  ],
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent {
  @Input() description!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public quote: Quote) {
    this.description = quote.text + ' - '  + quote.author;
  }
}
