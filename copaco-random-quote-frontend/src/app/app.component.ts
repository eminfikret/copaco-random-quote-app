import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuoteCardComponent} from "./quote-card/quote-card.component";
import {QuoteNavigationComponent} from "./quote-navigation/quote-navigation.component";
import {InternetStatusService} from "./services/internet-status.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteCardComponent, QuoteNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'copaco-random-quote-frontend';

  constructor(private internetStatusService: InternetStatusService) {}

  quotes = [
    { text: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.', author: 'Bernard M. Baruch' },
    { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
    { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' }
  ];
  currentQuoteIndex = 0;

  get currentQuote() {
    return this.quotes[this.currentQuoteIndex];
  }

  slideLeft() {
    this.currentQuoteIndex = (this.currentQuoteIndex - 1 + this.quotes.length) % this.quotes.length;
  }

  slideRight() {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
  }
}
