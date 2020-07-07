import { Injectable } from '@angular/core';
import {FlightPlan } from '../models/flight-plan.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DronPlannerService {
  private readonly _flightPlans = new BehaviorSubject([]);

  readonly flightPlans$ = this._flightPlans.asObservable();

  private _currentPlan = new BehaviorSubject(null);
  readonly currentPlan$ = this._currentPlan.asObservable();

  constructor() { }

  private get flightPlans(){
    return this._flightPlans.getValue();
  }

  private set flightPlans(val){
    this._flightPlans.next(val);
  }
  private set currentPlan(val){
    this._currentPlan.next(val);
  }
  addPlan(item){
    this.flightPlans = [...this.flightPlans, item ];
  }
  removePlan(id){
    this.flightPlans = [...this.flightPlans.filter(plan => plan.id !== id)]
  }

  showPlan(id){
    console.log(this.flightPlans, id);
    this.currentPlan = this.flightPlans.find(plan => plan.id === id);
    console.log(this.currentPlan);
  }
}
