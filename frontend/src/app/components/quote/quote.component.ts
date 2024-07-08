import { Component, Input } from '@angular/core';
import {Quote} from "../../models/quote/quote.model";

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() quote?: Quote;
}
