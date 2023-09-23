import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SpaComponent } from './Components/spa/spa.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { Navbar2Component } from './Components/navbar2/navbar2.component';
import { CardsComponent } from './Components/cards/cards.component';
import { CreditsComponent } from './Components/credits/credits.component';
import { OperationsComponent } from './Components/operations/operations.component';
import { OffersComponent } from './Components/offers/offers.component';
import { InsuranceComponent } from './Components/insurance/insurance.component';
import { PointsComponent } from './Components/points/points.component';
import { ToHelpComponent } from './Components/to-help/to-help.component';
import { DataAPIService} from './services/DataAPIService'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpaComponent,
    NavbarComponent,
    Navbar2Component,
    InicioComponent,
    CardsComponent,
    CreditsComponent,
    OperationsComponent,
    OffersComponent,
    InsuranceComponent,
    PointsComponent,
    ToHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
