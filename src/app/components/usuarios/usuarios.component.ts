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
  public formulario = new FormGroup({
    nombre:  new FormControl(' ', [Validators.required] )
  })

  
  
  constructor() {
    this.formulario = this.createFormGroup();
   }

   createFormGroup(){
     return new FormGroup({
      
     });
   }

  ngOnInit() {
  }

onSubmit(){
  console.log(this.formulario.value );
;}

}
