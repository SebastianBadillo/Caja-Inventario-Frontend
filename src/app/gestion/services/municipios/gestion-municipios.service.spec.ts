/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestionMunicipiosService } from './gestion-municipios.service';

describe('Service: GestionMunicipios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionMunicipiosService]
    });
  });

  it('should ...', inject([GestionMunicipiosService], (service: GestionMunicipiosService) => {
    expect(service).toBeTruthy();
  }));
});
