import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:  FormGroup
  constructor(
    private title:Title,
    private meta:Meta,
    private fb:FormBuilder,
    
    ){
    title.setTitle('Registrar'),
    meta.updateTag({name:'keywords', content:"Departamentos Mar del Plata | Alquila YA"}),
    meta.updateTag({name:'description', content:"Alquilá tu departamento en Mar del Plata, sin requisitos! Registrar"}),
    
    this.myForm = this.fb.group({
      name:['', [Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
    });
  }
sigin(){
    console.log(this.myForm.value)
  }
}