import { Component } from '@angular/core';
import { sequences } from "./demo-tracks";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription } from "rxjs/Rx";
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

  timeSub: Subscription;
  timer = Observable.timer(0, 1000);

  constructor( private sequencerService: SequencerService ){}

  changeSequence(index){
    this.sequence = sequences[index];
  }

  start(){
    this.playing = true;
    // basic timer, do a MOD based on number of steps and should be good to go.
    this.timeSub =  this.timer.subscribe( ( val )=> console.log( val ))
  }

  stop(){
    this.playing = false;
    this.timeSub.unsubscribe();
  }



}
