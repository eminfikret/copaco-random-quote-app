import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuoteCardComponent} from "./components/quote-card/quote-card.component";
import {QuoteNavigationComponent} from "./components/quote-navigation/quote-navigation.component";
import {InternetStatusService} from "./services/internet-status/internet-status.service";
import {Quote} from "./models/quote/quote.model";
import {QuoteFallbackService} from "./services/quote-fallback/quote-fallback.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuoteCardComponent,
    QuoteNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'copaco-random-quote-frontend';
  currentQuote!: Quote;
  quotes: Quote[] = [];
  currentIndex: number = -1;
  isPlaying: boolean = false;

  constructor(
    private quoteFallbackService: QuoteFallbackService,
    private internetStatusService: InternetStatusService
  ) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    this.quoteFallbackService.getQuote().subscribe({
      next: quote => {
        this.quotes.push(quote);
        this.currentIndex = this.quotes.length - 1;
        this.currentQuote = this.quotes[this.currentIndex];
      },
      error: err => {
        console.error(err);
        this.currentQuote = { text: 'No quotes available', author: '' };
      }
    });
  }

  slideLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuote = this.quotes[this.currentIndex];
    }
  }

  slideRight(): void {
    if (this.currentIndex < this.quotes.length - 1) {
      this.currentIndex++;
      this.currentQuote = this.quotes[this.currentIndex];
    } else {
      this.getQuote();
    }
  }

  onPlay(): void {
    this.isPlaying = true;
    this.autoSlideRight();
  }

  onStop(): void {
    this.isPlaying = false;
  }

  private autoSlideRight(): void {
    if (this.isPlaying) {
      this.slideRight();
      setTimeout(() => this.autoSlideRight(), 5000);
    }
  }

  get disableLeftNavigation(): boolean {
    return this.currentIndex <= 0;
  }
}
