import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isToggle         = new Input();
  active: boolean           = true;
  hasActiveChild: boolean   = true;

  constructor() { }

  ngOnInit(): void {
  }

}
