import {Component, EventEmitter, Output} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-quote-navigation',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    NgIf
  ],
  templateUrl: './quote-navigation.component.html',
  styleUrl: './quote-navigation.component.css'
})
export class QuoteNavigationComponent {
  @Output() play = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
  @Output() navigateLeft = new EventEmitter<void>();
  @Output() navigateRight = new EventEmitter<void>();

  isPlaying: boolean = false;

  onPlay() {
    this.isPlaying = true;
    this.play.emit();
  }

  onStop() {
    this.isPlaying = false;
    this.stop.emit();
  }

  onNavigateLeft() {
    this.navigateLeft.emit();
  }

  onNavigateRight() {
    this.navigateRight.emit();
  }
}
