import { TestBed } from '@angular/core/testing';

import { ImplantationService } from './implantation.service';

describe('ImplantationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplantationService = TestBed.get(ImplantationService);
    expect(service).toBeTruthy();
  });
});
