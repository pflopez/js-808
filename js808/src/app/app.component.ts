import 'rxjs/add/observable/timer';
import { Component, HostListener, OnInit } from '@angular/core';
import { sequences } from "./demo-tracks";
import { SequencerService } from "./services/sequencer.service";
import { Track } from "./models/track";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'app';
  sequences = sequences;
  sequence = sequences[0];
  playing = false;
  bpm : number;
	trackSelected: Track;

  @HostListener('document:keypress', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {

    if(event.charCode === 32){
      if(this.playing){
        this.stop();
      }else{
        this.start();
      }
    }

  }


  constructor( private sequencerService: SequencerService ){
    this.bpm = this.sequencerService.getBpm();

  }

	ngOnInit(): void {
		this.trackSelected = this.sequence.tracks[0];
	}

  changeSequence(index: number){
    this.sequence = sequences[index];
		this.trackSelected = this.sequence.tracks[0];
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

  changeVelocity(index: number){
    this.sequencerService.setSequencerVelocity(index);
  }

	selectTrack(track: Track){
		this.trackSelected = track;
	}

}
