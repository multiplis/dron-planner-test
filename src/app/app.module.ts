import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansListComponent } from './components/plans-list/plans-list.component';
import { MapComponent } from './components/map/map.component';
import { DronPlannerComponent } from './components/dron-planner/dron-planner.component';
import {DronPlannerService } from './services/dron-planner.service';
@NgModule({
  declarations: [
    AppComponent,
    PlansListComponent,
    MapComponent,
    DronPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DronPlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
