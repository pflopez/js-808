import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepButtonComponent } from "./components/step-button/step-button.component";
import { TrackLaneComponent } from "./components/track-lane/track-lane.component";
import { StepIndicatorComponent } from "./components/step-indicator/step-indicator.component";
import { StepIndicatorLaneComponent } from "./components/step-indicator-lane/step-indicator-lane.component";
import { SequencerService } from "./services/sequencer.service";
import { PlayerService } from "./services/player.service";
import { FormsModule } from "@angular/forms";
import { SequenceSelectorComponent } from "./components/sequence-selector/sequence-selector.component";
import { VelocitySelectorComponent } from "./components/velocity-selector/velocity-selector.component";



@NgModule({
  declarations: [
    AppComponent,
    StepButtonComponent,
    TrackLaneComponent,
    StepIndicatorComponent,
    StepIndicatorLaneComponent,
    SequenceSelectorComponent,
    VelocitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    SequencerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
