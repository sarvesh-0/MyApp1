import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcomComponent } from './errorcom.component';

describe('ErrorcomComponent', () => {
  let component: ErrorcomComponent;
  let fixture: ComponentFixture<ErrorcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
