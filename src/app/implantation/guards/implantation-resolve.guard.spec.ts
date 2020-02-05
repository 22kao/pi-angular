import { TestBed, async, inject } from '@angular/core/testing';

import { ImplantationResolveGuard } from './implantation-resolve.guard';

describe('ImplantationResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImplantationResolveGuard]
    });
  });

  it('should ...', inject([ImplantationResolveGuard], (guard: ImplantationResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
