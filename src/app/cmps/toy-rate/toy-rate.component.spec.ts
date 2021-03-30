import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyRateComponent } from './toy-rate.component';

describe('ToyRateComponent', () => {
  let component: ToyRateComponent;
  let fixture: ComponentFixture<ToyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
