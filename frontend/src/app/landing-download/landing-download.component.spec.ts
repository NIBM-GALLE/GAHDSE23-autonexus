import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDownloadComponent } from './landing-download.component';

describe('LandingDownloadComponent', () => {
  let component: LandingDownloadComponent;
  let fixture: ComponentFixture<LandingDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
