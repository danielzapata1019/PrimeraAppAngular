import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //@Input() titulo;

  titulo: string = 'Mi primera App';
  constructor() {
    console.log('Se construye el componente');
  }

  ngOnInit(): void {
    console.log('Se inicia el componente');
  }
}
