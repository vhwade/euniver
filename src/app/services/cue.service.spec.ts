/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CueService } from './cue.service';

describe('Service: Cue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CueService]
    });
  });

  it('should ...', inject([CueService], (service: CueService) => {
    expect(service).toBeTruthy();
  }));
});