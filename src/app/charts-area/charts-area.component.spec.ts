import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAreaComponent } from './charts-area.component';

describe('ChartsAreaComponent', () => {
  let component: ChartsAreaComponent;
  let fixture: ComponentFixture<ChartsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
