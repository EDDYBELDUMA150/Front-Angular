import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DeshaboardComponent } from './deshaboard/deshaboard.component';
import { HomeComponent } from './home/home.component';
import { RecursosComponent } from './recursos/recursos.component';
import { FormComponent } from './recursos/form.component';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  
  {path : 'home',
  component : HomeComponent
  },
  {path : 'login',
  component : LoginComponent
  },
  {path : 'directiva',
  component : DirectivaComponent
  },
  {path : 'perfil-admin',
  component : DeshaboardComponent,
  children:[
    {
      path:'recursos',
      component: RecursosComponent
      
       
    },
    {
      path:'aprendizaje',
      component: AprendizajeComponent
      
       
    },
    
  ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
