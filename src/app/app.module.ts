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
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormComponent } from './recursos/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrolldeshaboardComponent } from './scrolldeshaboard/scrolldeshaboard.component'; 
import { AdminActivComponent } from './admin-activ/admin-activ.component';
import { VerUserRolComponent } from './ver-user-rol/ver-user-rol.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentanaJugadorComponent } from './ventana-jugador/ventana-jugador.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EstadoApp1Component } from './estado-app1/estado-app1.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DeshaboardComponent,
    DirectivaComponent,
    AprendizajeComponent,
    ActividadesComponent,
    RecursosComponent,
    NivelesComponent,
    FormComponent,
    AdminActivComponent,
    VerUserRolComponent,
    ScrolldeshaboardComponent,
    UsuariosComponent,
    FormComponent,
    FooterComponent,
    VentanaJugadorComponent,
    ProgressBarComponent,
    VentanaJugadorComponent,
    ProgressBarComponent,
    NosotrosComponent,
    EstadoApp1Component

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule, 
    
   OverlayModule 
    
    
  

  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
