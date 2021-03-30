import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyPreviewComponent } from './toy-preview.component';

describe('ToyPreviewComponent', () => {
  let component: ToyPreviewComponent;
  let fixture: ComponentFixture<ToyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
