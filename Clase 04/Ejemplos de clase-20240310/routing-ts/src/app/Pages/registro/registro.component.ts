import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  myForm: FormGroup;
  //private fb:FormBuilder = new FormBuilder()
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: [''],
      email: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
    });
  }
  registro() {
    console.log(this.myForm.value);
  }
}
