import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  @Input() usuario: String;
  @Output() enviarUsuarioEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(): void {
    console.log("Tarea");
    this.enviarUsuarioEvent.emit(this.usuario + " desde la Tarea");
  }


}
