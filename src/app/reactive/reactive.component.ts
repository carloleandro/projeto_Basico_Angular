import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', Validators.compose([Validators.required, Validators.min(9999999999)])),/* Ver opções de validação para 11 números */
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    complement: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordconfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.email, Validators.required]),


    tels: new FormArray([
      new FormControl(''),
      new FormControl(''),

    ]),

  })

  tels: FormArray = this.formData.get('tels') as FormArray

  constructor(
    private snack: MatSnackBar,
    

  ) { }
  ngOnInit(): void {
   
  }

  submit(): void {
    console.log(`Name= ${this.formData.controls['name'].value}`)
    console.log(`LastName =  ${this.formData.controls['lastname'].value}`)
    console.log(`Email =  ${this.formData.controls['email'].value}`)
    console.log(`UserName =  ${this.formData.controls['username'].value}`)
    console.log(`CPF =  ${this.formData.controls['cpf'].value}`)
    console.log(`Address =  ${this.formData.controls['address'].value}`)
    console.log(`Complement =  ${this.formData.controls['complement'].value}`)
    console.log(`Password =  ${this.formData.controls['password'].value}`)
    console.log(`Password =  ${this.formData.controls['passwordconfirm'].value}`)
    this.snack.open("Cadastro concluído com sucesso!", 'ok', { duration: 3000 })
    
   

  }
  newContact(): void {
    this.tels.push(new FormControl('', Validators.required))
  }
  deleteContact(): void {
    this.tels.controls = this.tels.controls.filter((x, index) => {
      return index != this.tels.controls.length - 1
    })

  }

}


