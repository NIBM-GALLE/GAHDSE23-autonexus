import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSigninComponent } from './customer-signin.component';

describe('CustomerSigninComponent', () => {
  let component: CustomerSigninComponent;
  let fixture: ComponentFixture<CustomerSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
