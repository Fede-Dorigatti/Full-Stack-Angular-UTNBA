import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
valueOne:number=0;
valueTwo:number=0;
result=0

countrys=['Arg','Bra','Uru']

products=[
  {
    id:1,
    title:'Celular Samsung'
  },
  {
    id:2,
    title:'Celular Iphone'
  },
  {
    id:3,
    title:'Celular Xiaomi'
  }
]
Calculator(){
  this.result = this.valueOne + this.valueTwo;
};

nextProducts(){
  this.products=[
    {
      id:1,
      title:'Celular Samsung'
    }
  ]
}
}
