import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarberComponent } from './add-barber.component';

describe('AddBarberComponent', () => {
  let component: AddBarberComponent;
  let fixture: ComponentFixture<AddBarberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBarberComponent]
    });
    fixture = TestBed.createComponent(AddBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
