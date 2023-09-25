import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SpaComponent } from './Components/spa/spa.component';
import { CardsComponent } from './Components/cards/cards.component';
import { CreditsComponent } from './Components/credits/credits.component';
import { OperationsComponent } from './Components/operations/operations.component';
import { OffersComponent } from './Components/offers/offers.component';
import { InsuranceComponent } from './Components/insurance/insurance.component';
import { PointsComponent } from './Components/points/points.component';
import { ToHelpComponent } from './Components/to-help/to-help.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: SpaComponent },
  { path: 'home/cards', component: CardsComponent },
  { path: 'home/credits', component: CreditsComponent },
  { path: 'home/operations', component: OperationsComponent }

  ,
  { path: 'home/offers', component: OffersComponent }
  ,
  { path: 'home/insuranse', component: InsuranceComponent }
  ,
  { path: 'home/points', component: PointsComponent }
  ,
  { path: 'home/tohelp', component: ToHelpComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
