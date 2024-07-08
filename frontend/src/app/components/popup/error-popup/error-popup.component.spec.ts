import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ErrorPopupComponent } from './error-popup.component';

describe('ErrorPopupComponent', () => {
  let component: ErrorPopupComponent;
  let fixture: ComponentFixture<ErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        ErrorPopupComponent
      ],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test error message' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the injected message', () => {
    const messageElement: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(messageElement.textContent).toContain('Test error message');
  });
});
