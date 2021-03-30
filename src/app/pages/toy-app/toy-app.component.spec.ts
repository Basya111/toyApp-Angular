import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyAppComponent } from './toy-app.component';

describe('ToyAppComponent', () => {
  let component: ToyAppComponent;
  let fixture: ComponentFixture<ToyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
