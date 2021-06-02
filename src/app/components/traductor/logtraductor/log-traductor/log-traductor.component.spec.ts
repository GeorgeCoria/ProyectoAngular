import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTraductorComponent } from './log-traductor.component';

describe('LogTraductorComponent', () => {
  let component: LogTraductorComponent;
  let fixture: ComponentFixture<LogTraductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTraductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTraductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
