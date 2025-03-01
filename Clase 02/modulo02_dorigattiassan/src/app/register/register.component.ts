import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup
  constructor(private fb:FormBuilder){
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
