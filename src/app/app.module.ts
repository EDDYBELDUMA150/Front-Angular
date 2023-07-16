import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DeshaboardComponent } from './deshaboard/deshaboard.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { RecursosComponent } from './recursos/recursos.component';
import { NivelesComponent } from './niveles/niveles.component';
import { FormComponent } from './recursos/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstadoAppComponent } from './estado-app/estado-app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DeshaboardComponent,
    DirectivaComponent,
    AprendizajeComponent,
    ActividadesComponent,
    RecursosComponent,
    NivelesComponent,
    FormComponent,
    EstadoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
