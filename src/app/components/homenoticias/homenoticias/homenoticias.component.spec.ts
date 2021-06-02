import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenoticiasComponent } from './homenoticias.component';

describe('HomenoticiasComponent', () => {
  let component: HomenoticiasComponent;
  let fixture: ComponentFixture<HomenoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
