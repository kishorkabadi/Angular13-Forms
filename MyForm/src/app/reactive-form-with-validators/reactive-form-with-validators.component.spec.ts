import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithValidatorsComponent } from './reactive-form-with-validators.component';

describe('ReactiveFormWithValidatorsComponent', () => {
  let component: ReactiveFormWithValidatorsComponent;
  let fixture: ComponentFixture<ReactiveFormWithValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormWithValidatorsComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormWithValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
