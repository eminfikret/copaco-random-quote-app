import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { QuoteComponent } from "../quote/quote.component";
import { QuoteCardNavigationComponent } from "../quote-card-navigation/quote-card-navigation.component";

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  standalone: true,
  imports: [
    MatIconModule,
    QuoteComponent,
    QuoteCardNavigationComponent,
  ],
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent {
  @Input() currentQuote!: { text: string; author: string; };
}
