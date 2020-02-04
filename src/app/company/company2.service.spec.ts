import { TestBed } from '@angular/core/testing';

import { Company2Service } from './company2.service';

describe('Company2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Company2Service = TestBed.get(Company2Service);
    expect(service).toBeTruthy();
  });
});
