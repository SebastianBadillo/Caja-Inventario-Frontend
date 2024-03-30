import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-personas',
  templateUrl: './table-personas.component.html',
  styleUrls: ['./table-personas.component.css'],
})
export class TablePersonasComponent implements OnInit {
  @Input()
  listadoPersonas: any;
  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  eliminate(persona: any) {
    this.deleteEvent.emit(persona);
  }
}
