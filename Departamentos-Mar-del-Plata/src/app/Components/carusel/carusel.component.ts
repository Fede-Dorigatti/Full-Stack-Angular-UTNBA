import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Departament } from 'src/app/Interfaces/departaments';
import { DepartamentsService } from 'src/app/Services/departaments.service';


@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent {

  departaments: Promise<Departament[]>;  
  loading= true;


  constructor(
    private title:Title,
    private meta:Meta,
    private activatedRoute:ActivatedRoute,
    private departamentsService: DepartamentsService,
    
  ){

  title.setTitle('Departamentos | Mar del Plata'),
  meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata | Alquila YA "}),
  meta.updateTag({name:'description', content:"Alquila tu departamento en Mar del Plata | PAGOS ONLINE | MercadoPago - Transferencias | Sin requisitos, estas son algunas de nuestras promciones para la Temporada 2024"})
  this.departaments = this.departamentsService.getAll();
  this.loading=false;
  
}
}