/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestionPersonasService } from './gestion-personas.service';

describe('Service: GestionPersonas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionPersonasService]
    });
  });

  it('should ...', inject([GestionPersonasService], (service: GestionPersonasService) => {
    expect(service).toBeTruthy();
  }));
});
