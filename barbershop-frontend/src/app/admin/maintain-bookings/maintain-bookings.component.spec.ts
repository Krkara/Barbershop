import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainBookingsComponent } from './maintain-bookings.component';

describe('MaintainBookingsComponent', () => {
  let component: MaintainBookingsComponent;
  let fixture: ComponentFixture<MaintainBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainBookingsComponent]
    });
    fixture = TestBed.createComponent(MaintainBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
