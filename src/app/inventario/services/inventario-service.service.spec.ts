/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InventarioServiceService } from './inventario-service.service';

describe('Service: InventarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventarioServiceService]
    });
  });

  it('should ...', inject([InventarioServiceService], (service: InventarioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
