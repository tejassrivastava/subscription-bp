import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'subscribe', component: SubscribeComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
