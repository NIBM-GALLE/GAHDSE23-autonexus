import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartPageComponent } from './getstart-page.component';

describe('GetstartPageComponent', () => {
  let component: GetstartPageComponent;
  let fixture: ComponentFixture<GetstartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetstartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
