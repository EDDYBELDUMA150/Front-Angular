import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DeshaboardComponent } from './deshaboard/deshaboard.component';
import { HomeComponent } from './home/home.component';
import { RecursosComponent } from './recursos/recursos.component';
import { FormComponent } from './recursos/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  
  {path : 'home',
  component : HomeComponent
  },
  {path : 'login',
  component : LoginComponent
  },
  {path : 'perfil-admin',
  component : DeshaboardComponent,
  children:[
    {
      path:'recursos',
      component: RecursosComponent
    
       
    },
    
  ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
