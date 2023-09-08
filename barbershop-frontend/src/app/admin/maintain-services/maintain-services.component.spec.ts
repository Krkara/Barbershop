import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainServicesComponent } from './maintain-services.component';

describe('MaintainServicesComponent', () => {
  let component: MaintainServicesComponent;
  let fixture: ComponentFixture<MaintainServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainServicesComponent]
    });
    fixture = TestBed.createComponent(MaintainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
