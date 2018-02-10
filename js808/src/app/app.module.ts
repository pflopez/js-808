import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepButtonComponent } from "./components/step-button/step-button.component";
import { TrackLaneComponent } from "./components/track-lane/track-lane.component";
import { StepIndicatorComponent } from "./components/step-indicator/step-indicator.component";
import { StepIndicatorLaneComponent } from "./components/step-indicator-lane/step-indicator-lane.component";
import { SequencerService } from "./services/sequencer.service";


@NgModule({
  declarations: [
    AppComponent,
    StepButtonComponent,
    TrackLaneComponent,
    StepIndicatorComponent,
    StepIndicatorLaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SequencerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
