import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DepartamentComponent } from './Components/departament/departament.component';
import { LoginComponent } from './Pages/login/login.component';
import { FrontPageComponent } from './Components/front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';
import { NavbComponent } from './Components/navb/navb.component';
import { CaruselComponent } from './Components/carusel/carusel.component';
import { NavbarPhoneComponent } from './Components/navbar-phone/navbar-phone.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DepatamentsComponent } from './Components/depataments/depataments.component';
import { TermsServiceComponent } from './Components/terms-service/terms-service.component';
import { DetailsComponent } from './Pages/details/details.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { DetailsPlusComponent } from './Components/details-plus/details-plus.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    DepartamentComponent,
    LoginComponent,
    FrontPageComponent,
    SearchComponent,
    NavbComponent,
    CaruselComponent,
    NavbarPhoneComponent,
    FooterComponent,
    DepatamentsComponent,
    TermsServiceComponent,
    DetailsComponent,
    LoadingComponent,
    DetailsPlusComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
