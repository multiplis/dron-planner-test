import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DronPlannerComponent } from './components/dron-planner/dron-planner.component';


const routes: Routes = [
  { path: 'dron-planner', component: DronPlannerComponent },
  { path: '',   redirectTo: '/dron-planner', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
