import { TestBed } from '@angular/core/testing';

import { ImplantationModuloService } from './implantation-modulo.service';

describe('ImplantationModuloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplantationModuloService = TestBed.get(ImplantationModuloService);
    expect(service).toBeTruthy();
  });
});
