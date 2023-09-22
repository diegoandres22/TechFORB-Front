import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SpaComponent } from './Components/spa/spa.component';
import { CardsComponent } from './Components/cards/cards.component';
import { CreditsComponent } from './Components/credits/credits.component';


const routes: Routes = [
  
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: SpaComponent},
  {path: 'home/cards', component: CardsComponent},
  {path: 'home/credits', component: CreditsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
