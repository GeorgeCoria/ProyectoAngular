import { TestBed } from '@angular/core/testing';

import { LogTraductorService } from './log-traductor.service';

describe('LogTraductorService', () => {
  let service: LogTraductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogTraductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
