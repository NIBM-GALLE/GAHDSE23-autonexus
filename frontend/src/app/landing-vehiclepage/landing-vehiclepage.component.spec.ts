import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingVehiclepageComponent } from './landing-vehiclepage.component';

describe('LandingVehiclepageComponent', () => {
  let component: LandingVehiclepageComponent;
  let fixture: ComponentFixture<LandingVehiclepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingVehiclepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingVehiclepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
