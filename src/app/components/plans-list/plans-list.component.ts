import { Component, OnInit } from '@angular/core';
import {DronPlannerService } from '../../services/dron-planner.service';


@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss']
})
export class PlansListComponent implements OnInit {
  flightPlans$: any;
  plans: any;
  constructor(private plannerService: DronPlannerService) { }

  ngOnInit(): void {
    this.flightPlans$ = this.plannerService.flightPlans$.subscribe((val)=>{
      this.plans = val;
    });
  }
  remove(id){
    this.plannerService.removePlan(id);
  }
  showPlan(id:string){
    this.plannerService.showPlan(id);
  }
  addNew(){
    this.plannerService.showPlan(null);
  }
}
