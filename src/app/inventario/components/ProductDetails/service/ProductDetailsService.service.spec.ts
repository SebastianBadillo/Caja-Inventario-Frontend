/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDetailsServiceService } from './ProductDetailsService.service';

describe('Service: ProductDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailsServiceService]
    });
  });

  it('should ...', inject([ProductDetailsServiceService], (service: ProductDetailsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
