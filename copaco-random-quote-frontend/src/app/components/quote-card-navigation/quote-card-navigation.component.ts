import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-quote-card-navigation',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './quote-card-navigation.component.html',
  styleUrl: './quote-card-navigation.component.css'
})
export class QuoteCardNavigationComponent {
  @Output() share = new EventEmitter<void>();
  @Output() like = new EventEmitter<void>();
  @Output() dislike = new EventEmitter<void>();

  onShare() {
    this.share.emit();
  }

  onLike() {
    this.like.emit();
  }

  onDislike() {
    this.dislike.emit();
  }
}
