import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private title:Title,
    private meta:Meta,
    
  ){

  title.setTitle('Departamentos | Mar del Plata'),
  meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata"}),
  meta.updateTag({name:'description', content:"Inicia seccion en departamentos en Mar del Plata | ALQUILA YA | MercadoPago - Transferencias | Sin requisitos"})
}}
