import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyComputationComponent } from './heavy-computation.component';

describe('HeavyComputationComponent', () => {
  let component: HeavyComputationComponent;
  let fixture: ComponentFixture<HeavyComputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeavyComputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
