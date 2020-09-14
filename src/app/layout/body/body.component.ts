import { Component, OnInit, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() nombre: String = "Sin Nombre";

  nombreUsuario : string = "dzapatas";

  constructor() {}

  ngOnInit(): void {}

  cambiarNombre(evento: any): void {
    this.nombre = 'Daniel Zapata';
    console.log(JSON.stringify(evento));
  }

  respuestaTarea(evt: any) : void {
    console.log("Body");
    console.log(JSON.stringify(evt));
  }
}
