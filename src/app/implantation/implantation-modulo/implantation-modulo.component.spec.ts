import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantationModuloComponent } from './implantation-modulo.component';

describe('ImplantationModuloComponent', () => {
  let component: ImplantationModuloComponent;
  let fixture: ComponentFixture<ImplantationModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantationModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantationModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
