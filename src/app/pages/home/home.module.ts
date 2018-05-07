import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
//import { TypographyComponent } from './typography/typography.component';
import { BinaryOptionComponent } from './binary-options/binary.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TabModule } from 'angular-tabs-component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
    TabModule
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    UserProfileComponent, 
    TableListComponent, 
    // TypographyComponent, 
    BinaryOptionComponent,
    IconsComponent, 
    MapsComponent, 
    NotificationsComponent, 
    UpgradeComponent,
  ]
})
export class HomeModule { }
