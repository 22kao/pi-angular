import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantationDetailComponent } from './implantation-detail.component';

describe('ImplantationDetailComponent', () => {
  let component: ImplantationDetailComponent;
  let fixture: ComponentFixture<ImplantationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
