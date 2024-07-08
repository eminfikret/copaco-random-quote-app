import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCardNavigationComponent } from './quote-card-navigation.component';

describe('QuoteCardNavigationComponent', () => {
  let component: QuoteCardNavigationComponent;
  let fixture: ComponentFixture<QuoteCardNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCardNavigationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuoteCardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
