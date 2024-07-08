import { Component, Input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { QuoteComponent } from "../quote/quote.component";
import { QuoteCardNavigationComponent } from "../quote-card-navigation/quote-card-navigation.component";
import {Quote} from "../../models/quote/quote.model";

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
  @Input() quote!: Quote;
}
