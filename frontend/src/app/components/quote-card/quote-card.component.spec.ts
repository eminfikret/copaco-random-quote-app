import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteCardComponent } from './quote-card.component';
import { MatIconModule } from '@angular/material/icon';
import { QuoteComponent } from '../quote/quote.component';
import { QuoteCardNavigationComponent } from '../quote-card-navigation/quote-card-navigation.component';

describe('QuoteCardComponent', () => {
  let component: QuoteCardComponent;
  let fixture: ComponentFixture<QuoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        QuoteCardComponent,
        MatIconModule,
        QuoteComponent,
        QuoteCardNavigationComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCardComponent);
    component = fixture.componentInstance;
    component.quote = { text: 'Test Quote', author: 'Author' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display quote', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('app-quote')).toBeTruthy();
    expect(compiled.textContent).toContain('Test Quote');
  });
});
