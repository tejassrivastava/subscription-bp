import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { LandingComponent } from './landing/landing.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, SubscribeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
