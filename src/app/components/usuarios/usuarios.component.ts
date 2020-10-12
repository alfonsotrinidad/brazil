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
  //user{   id:""  }
   
  users = [
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 1,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 0,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 2,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 0,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 3,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 0,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 4,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 0,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 5,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 0,
      "settingsUser": { "language": "pt-br", "type": "client" }
    }
  ]
  createFormGroup(){
    return new FormGroup({
      id       : new FormControl("",[Validators.required,Validators.minLength(5)]),  
      nombre   : new FormControl("",[Validators.required,Validators.minLength(5)]),
      email    : new FormControl("",[Validators.required,Validators.minLength(5),
         	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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

save(){
  if(this.formulario.valid)
      console.log(this.formulario.get('nombre').value +   "   "+   this.formulario );

  else alert("faltan");
}

limpiar(){
  this.formulario.reset();
}


editar(e){
 
}


eliminar(e){
     if (confirm("Want to delete?  "  +e.target.id)){
          const nuevo = this.users.filter( item => item.id != e.target.id)
          this.users = nuevo   
         }
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
