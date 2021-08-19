import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddModule } from '@carbon/icons-angular';
import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';
import { MenuModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    MenuModule,
  ],
  exports: [
    AddModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    MenuModule,
  ]
})
export class IconsModule { }
