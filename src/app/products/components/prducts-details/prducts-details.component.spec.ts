import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductsDetailsComponent } from './prducts-details.component';

describe('PrductsDetailsComponent', () => {
  let component: PrductsDetailsComponent;
  let fixture: ComponentFixture<PrductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
