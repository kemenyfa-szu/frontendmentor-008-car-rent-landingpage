import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarTypeCardComponent } from './car-type-card/car-type-card.component';
import { CarTypeListComponent } from './car-type-list/car-type-list.component';
import { LearnMoreButtonComponent } from './learn-more-button/learn-more-button.component';
import { AttributionComponent } from './attribution/attribution.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTypeCardComponent,
    CarTypeListComponent,
    LearnMoreButtonComponent,
    AttributionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
