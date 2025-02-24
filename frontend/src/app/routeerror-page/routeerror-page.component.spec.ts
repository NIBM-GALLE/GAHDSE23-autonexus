import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteerrorPageComponent } from './routeerror-page.component';

describe('RouteerrorPageComponent', () => {
  let component: RouteerrorPageComponent;
  let fixture: ComponentFixture<RouteerrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteerrorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteerrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
