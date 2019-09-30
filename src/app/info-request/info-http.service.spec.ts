import { TestBed } from '@angular/core/testing';

import { InfoHttpService } from './info-http.service';

describe('InfoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoHttpService = TestBed.get(InfoHttpService);
    expect(service).toBeTruthy();
  });
});
