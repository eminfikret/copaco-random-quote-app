import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Quote } from '../../models/quote/quote.model';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-quote-card-navigation',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './quote-card-navigation.component.html',
  styleUrls: ['./quote-card-navigation.component.css']
})
export class QuoteCardNavigationComponent {
  @Input() quote!: Quote;
  @Output() share = new EventEmitter<void>();
  @Output() like = new EventEmitter<void>();
  @Output() dislike = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  onShare() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: this.quote,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLike() {
    this.like.emit();
  }

  onDislike() {
    this.dislike.emit();
  }
}
