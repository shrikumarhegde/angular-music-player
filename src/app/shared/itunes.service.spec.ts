import { TestBed } from '@angular/core/testing';

import { ItunesService } from './itunes.service';

describe('ItunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItunesService = TestBed.get(ItunesService);
    expect(service).toBeTruthy();
  });
});
