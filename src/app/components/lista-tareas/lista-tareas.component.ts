import { Component, OnInit } from '@angular/core';
import { Cerveceria } from 'src/app/model/interfaces/Cerveceria';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent implements OnInit {
  constructor(private _apiServices: ApiService) {}

  cervecerias: Cerveceria[] = [];

  items: any[] = [
    {
      id: 1,
      nombre: 'Tarea 1',
      descripcion: 'hdsjdhfjdhfjddfgd hsdjfhjdshfjsdf',
    },
    {
      id: 2,
      nombre: 'Tarea 2',
      descripcion: 'jskahfdjksadfjkshjdf',
    },
    {
      id: 3,
      nombre: 'Tarea 3',
      descripcion: 'sdfjksdhfjdshjfhdjkf dfjkshjdf',
    },
  ];

  ngOnInit(): void {
    this._apiServices.invocarApi().subscribe((respuesta: Cerveceria []) => {
      console.log("Respondió: ");
      console.log(respuesta);
      this.cervecerias = respuesta;
    });
    console.log("Init");
  }
}
