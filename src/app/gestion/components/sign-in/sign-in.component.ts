import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Input()
  listadoMunicipio: any;
  @Output()
  personaEmitir: EventEmitter<any> = new EventEmitter<any>();

  persona: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.persona = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      municipio: ['', Validators.required],
      telefono: ['', Validators.required],
      genero: ['', Validators.required],
      dob: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }
  validar() {
    console.log(this.persona);
    if (this.persona.valid) {
      const municipio = this.listadoMunicipio.find(
        (tupla) => tupla.municipio === this.persona.value.municipio
      );
      const clone = {
        ...this.persona.value,
        municipioId: municipio.id,
      };
      this.sendEmit(clone);
    }
  }

  sendEmit(persona: any) {
    this.personaEmitir.emit(persona);
  }
}
