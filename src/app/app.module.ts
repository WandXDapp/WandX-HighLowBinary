import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';




import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    AppRoutingModule,
    PagesModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
