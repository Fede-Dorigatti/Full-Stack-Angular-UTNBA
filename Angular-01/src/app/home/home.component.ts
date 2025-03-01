import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title="Haz click para saber el titulo";
  bandera=false;
  clickTitle(){
    console.log('clickTitle()');
    this.title="Hola Mundo";
    this.bandera=true;
  }
}
