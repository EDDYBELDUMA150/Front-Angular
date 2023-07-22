import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeshaboardComponent } from './deshaboard/deshaboard.component';
import { HomeComponent } from './home/home.component';
import { RecursosComponent } from './recursos/recursos.component';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { AdminActivComponent } from './admin-activ/admin-activ.component';
import { VerUserRolComponent } from './ver-user-rol/ver-user-rol.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
//import { EstadoAppComponent } from './estado-app/estado-app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ScrolldeshaboardComponent } from './scrolldeshaboard/scrolldeshaboard.component';
import { VentanaJugadorComponent } from './ventana-jugador/ventana-jugador.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

////


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

  {path : 'perfil-admin',
  component : DeshaboardComponent,
  children:[
    {
      path:'recursos',
      component: RecursosComponent
      
      
    },
    {
      path:'usuarios',
      component: UsuariosComponent
      
      
    },
    {
      path:'aprendizaje',
      component: AprendizajeComponent
      
       
    },  
       
    {
      path:'admin-activ',
      component: AdminActivComponent
      
       
    },
    {
      path:'veruser',
      component: VerUserRolComponent
      
       
    },


   // {
      //path:'estado-app',
      //component: EstadoAppComponent
      
       
  //  },
    //{
    //  path:'app-scrolldeshaboard',
    //  component: ScrolldeshaboardComponent

    //{
    //  path:'estado-app',
    //  component: EstadoAppComponent,
      
       

  //  }


    
  ]
  },
  {path : 'ventanaj',
  component : VentanaJugadorComponent,
       children:[
       {   
          path: 'scroll',
          component: ScrolldeshaboardComponent
       },
       {   
        path: 'progress',
        component: ProgressBarComponent
      }
     ]

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
