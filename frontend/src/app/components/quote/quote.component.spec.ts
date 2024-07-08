import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import {Quote} from "../../models/quote/quote.model";

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display quote information correctly', () => {
    const mockQuote: Quote = {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    };

    component.quote = mockQuote;
    fixture.detectChanges();

    const quoteText = fixture.nativeElement.querySelector('.quote-text');
    const quoteAuthor = fixture.nativeElement.querySelector('.quote-author');

    expect(quoteText.textContent).toContain(mockQuote.text);
    expect(quoteAuthor.textContent).toContain(mockQuote.author);
  });
});
