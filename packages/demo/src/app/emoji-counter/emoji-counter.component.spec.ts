import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiCounterComponent } from './emoji-counter.component';

describe('EmojiCounterComponent', () => {
  let component: EmojiCounterComponent;
  let fixture: ComponentFixture<EmojiCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
