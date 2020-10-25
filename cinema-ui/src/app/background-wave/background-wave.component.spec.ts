import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWaveComponent } from './background-wave.component';

describe('BackgroundWaveComponent', () => {
  let component: BackgroundWaveComponent;
  let fixture: ComponentFixture<BackgroundWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
