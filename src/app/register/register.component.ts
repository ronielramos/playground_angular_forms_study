import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArrayName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  private percentage: number;
  private pendentFields = 5;

  private formularios: FormArrayName;

  private formulario: FormGroup;

  constructor(private fg: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fg.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(130)]),
      city: [''],
      language: [''],
    });

    console.log(this.formulario)
  }

  private enviar() {
    console.log(this.formulario.value);
  }
}
