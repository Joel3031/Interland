import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CareersComponent } from './careers/careers.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { PshComponent } from './psh/psh.component';
import { CorporatebankingComponent } from './corporatebanking/corporatebanking.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LandingComponent, CareersComponent, HomeLandingComponent, PshComponent, CorporatebankingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
