import { Injectable } from '@angular/core';
import {Quote} from "../../models/quote/quote.model";
import {catchError, Observable, of, throwError} from "rxjs";
import {QuoteApiService} from "../quote-api/quote-api.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuoteFallbackService {
  private cacheKey = 'cachedQuotes';
  private hardcodedQuotesUrl = 'assets/hardcoded-quotes.json';
  private hardcodedQuotes: Quote[] = [];

  constructor(private quoteApiService: QuoteApiService, private http: HttpClient) {
    this.loadHardcodedQuotes();
  }

  private loadHardcodedQuotes(): void {
    this.http.get<Quote[]>(this.hardcodedQuotesUrl).subscribe(quotes => {
      this.hardcodedQuotes = quotes;
      localStorage.setItem(this.cacheKey, JSON.stringify(quotes));
    });
  }

  getQuote(): Observable<Quote> {
    return this.quoteApiService.getRandomQuote().pipe(
      catchError(() => this.getCachedOrHardcodedQuote())
    );
  }

  private getCachedOrHardcodedQuote(): Observable<Quote> {
    const cachedQuotes = this.getCachedQuotes();
    if (cachedQuotes.length > 0) {
      return of(cachedQuotes[Math.floor(Math.random() * cachedQuotes.length)]);
    }
    if (this.hardcodedQuotes.length > 0) {
      return of(this.hardcodedQuotes[Math.floor(Math.random() * this.hardcodedQuotes.length)]);
    }
    return throwError(() => new Error('No quotes available'));
  }

  private getCachedQuotes(): Quote[] {
    return JSON.parse(localStorage.getItem(this.cacheKey) || '[]');
  }
}
