import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscrowComponent } from './products/escrow/escrow.component';

const routes: Routes = [
  { path: '', redirectTo: 'Interland', pathMatch: 'full' },
  { path: 'escrow', component: EscrowComponent },
  { path: 'Interland', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  {path: '**', redirectTo: '/404'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
