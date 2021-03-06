import { Component } from '@angular/core';
import { sequences } from "./demo-tracks";
import 'rxjs/add/observable/timer';
import { SequencerService } from "./services/sequencer.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sequences = sequences;
  sequence = sequences[0];
  playing = false;
  bpm : number;


 
  constructor( private sequencerService: SequencerService ){
    this.bpm = this.sequencerService.getBpm();

  }

  changeSequence(index: number){
    this.sequence = sequences[index];
  }

  start(){
    this.playing = true;
    this.sequencerService.setBpm(this.bpm);
    this.sequencerService.start();
  }

  stop(){
    this.playing = false;
    this.sequencerService.stop();
  }


}
