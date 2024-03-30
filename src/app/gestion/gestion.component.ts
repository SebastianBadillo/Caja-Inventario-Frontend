import { GestionPersonasService } from './services/personas/gestion-personas.service';
import { GestionMunicipiosService } from './services/municipios/gestion-municipios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {
  municipiosData = [];
  setMunicitios = new Set();
  listadoMunicipios = [];
  listadoPersonas = [];
  constructor(
    private gestionMunicipioservice: GestionMunicipiosService,
    private gestionPersonasService: GestionPersonasService
  ) {}

  async ngOnInit() {
    // this.municipiosData = await this.gestionMunicipioservice.getMunicipiosAPI();
    // this.municipiosData.forEach((element) => {
    //   this.setMunicitios.add(element.municipio);
    // });
    // this.llenarTablaMunicipios();
    this.gestionMunicipioservice.getAllMunicipiosBackend().subscribe({
      next: (data) => {
        this.listadoMunicipios = data.map((item: any) => {
          return {
            id: item.id,
            municipio: item.municipio,
          };
        });
      },
    });
    this.getAllPersonas();
  }

  llenarTablaMunicipios() {
    this.setMunicitios.forEach((item) => {
      this.gestionMunicipioservice.addMunicipio(item).subscribe({
        next: () => {},
        error: (error) => {
          console.log(error);
        },
      });
    });
  }

  addPersona(persona: any) {
    this.gestionPersonasService.addPersona(persona).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }

  getAllPersonas() {
    this.gestionPersonasService.getAllPersonas().subscribe({
      next: (data) => {
        this.listadoPersonas = data.map((item) => {
          return {
            id: item.id,
            nombre: item.nombre,
            apellido: item.apellido,
            municipio: {
              id: item.municipioId,
              municipio: item.municipio,
            },
            email: item.email,
            telefono: item.telefono,
            genero: item.genero,
            dob: item.dob,
            contraseña: item.contraseña,
          };
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deletePersona(persona: any) {
    console.log(persona);
    this.gestionPersonasService.deletePersona(persona.id).subscribe({
      next: () => {
        this.getAllPersonas();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
