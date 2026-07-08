import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { CareersComponent } from './careers/careers.component';
import { PshComponent } from './psh/psh.component';
import { CorporatebankingComponent } from './corporatebanking/corporatebanking.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      // 1. Load the home page component directly on the empty path. No redirects!
      {
        path: '',
        component: HomeLandingComponent, // Make sure this matches your actual component name
        pathMatch: 'full'
      },

      // 2. Safely catch any old links in your app that might still explicitly point to '/home'
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
      },

      // The rest of your specific routes
      { path: 'careers', component: CareersComponent },
      { path: 'corpratebanking', component: CorporatebankingComponent },
      { path: 'psh', component: PshComponent } // (If you still have this here)
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
