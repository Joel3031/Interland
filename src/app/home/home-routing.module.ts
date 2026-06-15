import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '', component: HomeComponent, children: [

    { path: 'landing', loadChildren: () => import(`./landing/landing.module`).then(m => m.LandingModule) },
    {
      path: '', redirectTo: 'landing', pathMatch: 'full'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
