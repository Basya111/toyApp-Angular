import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsPreviewComponent } from './cart-details-preview.component';

describe('CartDetailsPreviewComponent', () => {
  let component: CartDetailsPreviewComponent;
  let fixture: ComponentFixture<CartDetailsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
