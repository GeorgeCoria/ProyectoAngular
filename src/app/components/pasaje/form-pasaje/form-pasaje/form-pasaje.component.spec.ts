import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasajeComponent } from './form-pasaje.component';

describe('FormPasajeComponent', () => {
  let component: FormPasajeComponent;
  let fixture: ComponentFixture<FormPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPasajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
