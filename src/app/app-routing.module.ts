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
<<<<<<< HEAD
import { EstadoAppComponent } from './estado-app/estado-app.component';
import { AdminActivComponent } from './admin-activ/admin-activ.component';
import { VerUserRolComponent } from './ver-user-rol/ver-user-rol.component';
import { ProgresoComponent } from './progreso/progreso.component';
=======
import { NosotrosComponent } from './nosotros/nosotros.component';
//import { EstadoAppComponent } from './estado-app/estado-app.component';
>>>>>>> a4a8ac35861da80656b959eff878005f852dd71f

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  
  {path : 'home',
  component : HomeComponent
  },
  {path : 'login',
  component : LoginComponent
  },  
  {path: 'nosotros', 
  component: NosotrosComponent 
  },
  {path : 'directiva',
  component : DirectivaComponent
  },
  //{path : 'estado-app', 
  //component : EstadoAppComponent
  //},
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
   // {
     // path:'estado-app',
      //component: EstadoAppComponent
      
       
<<<<<<< HEAD
    },
    {
      path:'admin-activ',
      component: AdminActivComponent
      
       
    },
    {
      path:'veruser',
      component: VerUserRolComponent
      
       
    },
    {
      path:'progreso',
      component: ProgresoComponent
      
       
    },
=======
   // },
>>>>>>> a4a8ac35861da80656b959eff878005f852dd71f
    
  ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
