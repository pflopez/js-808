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


 
  constructor( private sequencerService: SequencerService ){}

  changeSequence(index){
    this.sequence = sequences[index];
  }

  start(){
    this.playing = true;
    this.sequencerService.start();
  }

  stop(){
    this.playing = false;
    this.sequencerService.stop();
  }


}
