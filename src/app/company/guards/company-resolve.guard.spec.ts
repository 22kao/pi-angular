import { TestBed, async, inject } from '@angular/core/testing';

import { CompanyResolveGuard } from './company-resolve.guard';

describe('CompanyResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyResolveGuard]
    });
  });

  it('should ...', inject([CompanyResolveGuard], (guard: CompanyResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
