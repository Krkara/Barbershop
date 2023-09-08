import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainBarbersComponent } from './maintain-barbers.component';

describe('MaintainBarbersComponent', () => {
  let component: MaintainBarbersComponent;
  let fixture: ComponentFixture<MaintainBarbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainBarbersComponent]
    });
    fixture = TestBed.createComponent(MaintainBarbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
