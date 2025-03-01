import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Incluir
import { RegistroComponent } from './Pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { OcultarPipe } from './ocultar.pipe';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component'; //Incluir

@NgModule({
  declarations: [AppComponent, HomeComponent, RegistroComponent, OcultarPipe, LoginComponent, DetalleComponent, NavBarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Incluir
    FormsModule, //Incluir
    ReactiveFormsModule, //Incluir
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
