import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DeshaboardComponent } from './deshaboard/deshaboard.component';
import { HomeComponent } from './home/home.component';
import { RecursosComponent } from './recursos/recursos.component';

const routes: Routes = [
  {path : 'home',
  component : HomeComponent
  },
  {path : 'login',
  component : LoginComponent
  },
  {path : 'perfil-admin',
  component : DeshaboardComponent
  },
  {path : 'recursos',
  component : RecursosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
