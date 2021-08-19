import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  IconModule,
  UIShellModule,
} from 'carbon-components-angular';

import { HeaderModule } from 'carbon-components-angular';
import { SideNavModule } from 'carbon-components-angular';
import { ToggleModule } from 'carbon-components-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    UIShellModule,
    HeaderModule,
    SideNavModule,
    ToggleModule,
  ],
  exports: [
    IconModule,
    UIShellModule,
    HeaderModule,
    SideNavModule,
    ToggleModule,
  ]
})
export class ComponentsModule { }
