import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  nombre : string = "Intergrupo";
  direccion : string = "Crra 42 Este # 7A-12";
  
  constructor() {     
  }

  ngOnInit(): void {
  }

}
