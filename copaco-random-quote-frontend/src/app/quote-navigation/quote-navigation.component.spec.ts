import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNavigationComponent } from './quote-navigation.component';

describe('QuoteNavigationComponent', () => {
  let component: QuoteNavigationComponent;
  let fixture: ComponentFixture<QuoteNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
