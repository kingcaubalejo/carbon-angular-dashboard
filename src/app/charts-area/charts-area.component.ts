import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data';

@Component({
  selector: 'app-charts-area',
  template: `
  <ngx-charts-pie-chart
    [view]="view"
    [scheme]="colorScheme"
    [results]="single"
    [legend]="showLegend"
    [explodeSlices]="explodeSlices"
    [labels]="showLabels"
    [doughnut]="doughnut"
    [gradient]="gradient"
    (select)="onSelect($event)">
  </ngx-charts-pie-chart>
`,
  styleUrls: ['./charts-area.component.scss']
})
export class ChartsAreaComponent implements OnInit {

  single!: any[];

  // chart area size
  view: any[] = [700, 400];

  // options
  showLegend = false;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = true;

  // your color scheme
  colorScheme = {
    domain: [
      '#FF8A80', 
      '#EA80FC',
      '#8C9EFF', 
      '#80D8FF', 
      '#A7FFEB', 
      '#CCFF90', 
      '#FFFF8D', 
      '#FF9E80'
    ]
  };

  constructor() {
    Object.assign(this, {single})   
  }

  ngOnInit(): void {
    
  }

  // select event
  onSelect(event: Event) {
    console.log(event);
  }

}
