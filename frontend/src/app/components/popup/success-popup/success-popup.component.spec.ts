import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SuccessPopupComponent } from './success-popup.component';

describe('SuccessPopupComponent', () => {
  let component: SuccessPopupComponent;
  let fixture: ComponentFixture<SuccessPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        SuccessPopupComponent
      ],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Success!' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the injected message', () => {
    const messageElement: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(messageElement.textContent).toContain('Success!');
  });
});
