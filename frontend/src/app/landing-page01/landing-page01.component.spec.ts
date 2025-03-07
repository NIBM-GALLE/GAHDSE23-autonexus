import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage01Component } from './landing-page01.component';

describe('LandingPage01Component', () => {
  let component: LandingPage01Component;
  let fixture: ComponentFixture<LandingPage01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPage01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
