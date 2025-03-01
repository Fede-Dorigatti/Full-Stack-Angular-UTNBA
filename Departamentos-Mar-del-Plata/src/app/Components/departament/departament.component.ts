import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DepartamentsService } from '../../Services/departaments.service';
import { Departament } from 'src/app/Interfaces/departaments';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent {
  departaments: Promise<Departament[]>;
  loading=true;
  constructor(
    private departamentsService: DepartamentsService,
    private title:Title,
    private meta:Meta,
    
  ){

  title.setTitle('Departamentos | Mar del Plata'),
  meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata | Alquila YA "}),
  meta.updateTag({name:'description', content:"Alquila tu departamento en Mar del Plata | PAGOS ONLINE | MercadoPago - Transferencias | Sin requisitos, estas son algunas de nuestras promciones para la Temporada 2024"})
  
  this.departaments = this.departamentsService.getAll();
  this.loading=false;

    
}}

