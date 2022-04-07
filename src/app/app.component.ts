import { Component } from '@angular/core';
import { Suma } from './Entidades/suma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  miSuma:Suma;

  constructor() {
    this.miSuma = new Suma();
  }

}
