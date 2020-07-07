import { Component, OnInit,ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import {DronPlannerService } from '../../services/dron-planner.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  viewMode =  false;
  currentPlan : any;
  @ViewChild('name') name: ElementRef;

  @ViewChild('map', { static: true })
  map: ElementRef<HTMLCanvasElement>; 
  
  path = [];

  public context: CanvasRenderingContext2D;


  constructor(private plannerService: DronPlannerService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.context = this.map.nativeElement.getContext('2d');
    this.context.strokeStyle = "red";

    this.plannerService.currentPlan$.subscribe((val)=>{
      this.currentPlan = val;
      if(!!val){
        this.viewMode = true;
        this.drawPath();
      }else{
        this.viewMode = false;
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      }
    });
  }
  
  addPoint(ev){
    if(!this.viewMode ){
      this.getCursorPosition(ev);
    }
  }

  drawPath(){
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.beginPath();
    this.currentPlan.path.forEach((point)=>{
      this.context.lineTo(point.x,point.y);
    });
    this.context.stroke();
  }
    

  getCursorPosition(event) {
    const rect = this.map.nativeElement.getBoundingClientRect()
    const x = event.pageX - this.context.canvas.offsetLeft;
    const y = event.pageY - this.context.canvas.offsetTop;
    this.drawLine(x,y);
}
  drawLine(x,y){
    if(this.path.length === 0){
      this.context.beginPath();
      this.context.lineTo(x,y);
    }else{
      this.context.lineTo(x,y);
    }
    this.path.push({x:x, y:y})
    this.context.stroke()
  }
  save(){
    this.plannerService.addPlan({id: uuidv4(),name: this.name.nativeElement.value, path:  [...this.path]});
  }
  clear(){
    this.path = [];
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
}
