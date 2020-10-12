import { Component, OnInit } from '@angular/core';

//import { FormGroup, FormControl, FormCon } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']

  
})

export class UsuariosComponent implements OnInit {
  selectedUser: User = new User()

   
  users: User[] = [
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 1,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "cpf":"xxxxx",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "pasword":"123456",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 40,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
   
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 2,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "cpf":"xxxxx",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "pasword":"12345678",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 40,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
    {
      "uid": "hUvH6neQnWPkwWL9zM4bcAwYspn2",
      "id": 3,
      "name": "Vinícius Tolentino",
      "email": "vinicius@tolentinos.com",
      "cpf":"xxxxx",
      "phoneNumber": "(xx) xxxxx-xxxx",
      "pasword":"123456",
      "photoUrl": "https://yt3.ggpht.com/a/AGF-l7-lMrFMc6BpALelxfEgJamXwG4LSQnumwnZng=s900-mo-c-c0xffffffff-rj-k-no",
      "location": "Belo Horizonte",
      "points": 40,
      "settingsUser": { "language": "pt-br", "type": "client" }
    },
   
  ]
  createFormGroup(){
    return new FormGroup({
      id       : new FormControl("",[Validators.required,Validators.minLength(1)]),  
      name   : new FormControl("",[Validators.required,Validators.minLength(5)]),
      email    : new FormControl("",[Validators.required,Validators.minLength(5),
         	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      cpf      : new FormControl("",[Validators.required,Validators.minLength(5)]),
      phoneNumber    : new FormControl("",[Validators.required,Validators.minLength(5)]),
      password : new FormControl("",[Validators.required,Validators.minLength(5)]),
      photoUrl : new FormControl("",[Validators.required,Validators.minLength(5)]),
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
    this.selectedUser = this.users[0];
  }

save(){
  if(this.formulario.valid)
      (this.formulario.get('name').value +   "   "+   this.formulario );

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
    get name(){return this.formulario.get('name') }
    get email(){return this.formulario.get('email') }
    get cpf(){return this.formulario.get('cpf') }
    get phoneNumber(){return this.formulario.get('phoneNumber') }
    get password(){return this.formulario.get('password') }
    get photoUrl(){return this.formulario.get('photoUrl') }
    get location(){return this.formulario.get('location') }
    get points(){return this.formulario.get('points') }
    get settings(){return this.formulario.get('settings') }

    }
