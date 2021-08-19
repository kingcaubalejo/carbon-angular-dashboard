import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @HostBinding("style.height.%") height = 100;
  @HostBinding('class.bx--header') headerClass = true;

  navigationItems: NavigationItem[] = [];

  hasHamburger: boolean = true;
  active: boolean = true;
  secondAction: boolean = true;
  hasActiveChild: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.hasHamburger = true;
    this.navigationItems = [
      {
        type: "item",
        content: "Catalog",
        route: ["catalog"],
        href: "/catalog"
      },
      {
        type: "item",
        content: "Docs",
        isCurrentPage: true,
        route: ['docs']
      },
      {
        type: "item",
        content: "Support",
        route: ['support']
      },
      {
        type: "menu",
        title: "Manage",
        menuItems: [
          {
            route: [''],
            href: '',
            routeExtras: [''],
            content: "Link 1",
          },
          {
            route: [''],
            href: '',
            routeExtras: [''],
            content: "Link 2",
          },
          {
            route: [''],
            href: '',
            routeExtras: [''],
            content: "Link 3",
          }
        ]
      }
    ]
  }

  expanded(event: Event): void {
    this.hasHamburger = !this.hasHamburger;
  }



}
