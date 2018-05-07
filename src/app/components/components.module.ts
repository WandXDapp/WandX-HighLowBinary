import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { TabModule } from 'angular-tabs-component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TabModule
  ],
  declarations: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent,
    LoaderComponent
  ],
  exports: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent, 
    LoaderComponent,
    TabModule
  ]
})
export class ComponentsModule { }
