import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { CareersComponent } from './careers/careers.component';
import { PshComponent } from './psh/psh.component';
import { CorporatebankingComponent } from './corporatebanking/corporatebanking.component';


const routes: Routes = [{
  path: '', component: LandingComponent, children: [

    {
      path: 'home', component: HomeLandingComponent
    },
    {
      path: 'careers', component: CareersComponent
    },
    {
      path: 'psh', component: PshComponent
    },
    {
      path: 'corpratebanking', component: CorporatebankingComponent
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
