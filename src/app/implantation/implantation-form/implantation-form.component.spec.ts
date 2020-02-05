import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantationFormComponent } from './implantation-form.component';

describe('ImplantationFormComponent', () => {
  let component: ImplantationFormComponent;
  let fixture: ComponentFixture<ImplantationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
