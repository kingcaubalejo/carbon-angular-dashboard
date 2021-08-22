import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddModule } from '@carbon/icons-angular';
import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';
import { MenuModule } from '@carbon/icons-angular';
import { DashboardModule } from '@carbon/icons-angular';
import { StringTextModule } from '@carbon/icons-angular';
import { TemplateModule } from '@carbon/icons-angular';
import { OpenPanelTopModule } from '@carbon/icons-angular';
import { DataTableModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    MenuModule,
    DashboardModule,
    StringTextModule,
    TemplateModule,
    OpenPanelTopModule,
    DataTableModule,
  ],
  exports: [
    AddModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    MenuModule,
    DashboardModule,
    StringTextModule,
    TemplateModule,
    OpenPanelTopModule,
    DataTableModule,
  ]
})
export class IconsModule { }
