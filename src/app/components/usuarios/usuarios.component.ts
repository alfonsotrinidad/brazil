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
      nombre : new FormControl("",[Validators.required,Validators.minLength(5)]),
      email  : new FormControl("",[Validators.required,Validators.minLength(5),
         	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
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


get nombre(){return this.formulario.get('nombre') }
get email(){return this.formulario.get('email') }

}
