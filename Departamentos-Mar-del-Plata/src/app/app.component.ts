import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
}
  constructor(
    private title:Title,
    private meta:Meta,
    
  ){

  title.setTitle('Departamentos | Mar del Plata'),
  meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata | Alquila YA "}),
  meta.updateTag({name:'description', content:"Alquila tu departamento en Mar del Plata | PAGOS ONLINE | MercadoPago - Transferencias | Sin requisitos"})
  
}}