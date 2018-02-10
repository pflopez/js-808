import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepButtonComponent } from "./components/step-button/step-button.component";
import { TrackLaneComponent } from "./components/track-lane/track-lane.component";


@NgModule({
  declarations: [
    AppComponent,
    StepButtonComponent,
    TrackLaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
