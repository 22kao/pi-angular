import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantationListComponent } from './implantation-list.component';

describe('ImplantationListComponent', () => {
  let component: ImplantationListComponent;
  let fixture: ComponentFixture<ImplantationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
