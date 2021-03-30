import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFilterComponent } from './toy-filter.component';

describe('ToyFilterComponent', () => {
  let component: ToyFilterComponent;
  let fixture: ComponentFixture<ToyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
