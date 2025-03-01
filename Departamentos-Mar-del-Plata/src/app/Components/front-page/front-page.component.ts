import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  departaments: any;
  constructor(
    private title:Title,
    private meta:Meta,
    
  ){

  title.setTitle('Departamentos | Mar del Plata'),
  meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata | Alquila YA "}),
  meta.updateTag({name:'description', content:"Alquila tu departamento en Mar del Plata | PAGOS ONLINE | MercadoPago - Transferencias | Sin requisitos, estas son algunas de nuestras promciones para la Temporada 2024"})
  
}}