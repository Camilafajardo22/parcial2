/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EspecieService } from './especie.service';

describe('Service: Pinguino', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecieService]
    });
  });

  it('should ...', inject([EspecieService], (service: EspecieService) => {
    expect(service).toBeTruthy();
  }));
});
