import { Component, OnInit } from '@angular/core';

//import { FormGroup, FormControl, FormCon } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']

  
})

export class UsuariosComponent implements OnInit {
   

  
  createFormGroup(){
    return new FormGroup({
      id       : new FormControl("",[Validators.required,Validators.minLength(5)]),  
      nombre   : new FormControl("",[Validators.required,Validators.minLength(5)]),
      email    : new FormControl("",[Validators.required,Validators.minLength(5),	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      cpf      : new FormControl("",[Validators.required,Validators.minLength(5)]),
      phone    : new FormControl("",[Validators.required,Validators.minLength(5)]),
      password : new FormControl("",[Validators.required,Validators.minLength(5)]),
      photourl : new FormControl("",[Validators.required,Validators.minLength(5)]),
      location : new FormControl("",[Validators.required,Validators.minLength(5)]),
      points   : new FormControl("",[Validators.required,Validators.minLength(5)]),
      settings : new FormControl("",[Validators.required,Validators.minLength(5)])
   
    });
  }

  formulario : FormGroup 
  
  constructor() {
    this.formulario = this.createFormGroup();
   }

  

  ngOnInit() {
  }

onSubmit(){
  console.log(this.formulario.get('nombre').value +   "   this.formulario.value" );
}

limpiar(){
  this.formulario.reset();
}

get id(){return this.formulario.get('id') }
get nombre(){return this.formulario.get('nombre') }
get email(){return this.formulario.get('email') }
get cpf(){return this.formulario.get('cpf') }
get phone(){return this.formulario.get('phone') }
get password(){return this.formulario.get('password') }
get photourl(){return this.formulario.get('photourl') }
get location(){return this.formulario.get('location') }
get points(){return this.formulario.get('points') }
get settings(){return this.formulario.get('settings') }

}
