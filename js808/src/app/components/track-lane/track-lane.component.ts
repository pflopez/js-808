import { Component, Input } from '@angular/core';
import { Track } from "../../models/track";
import { SequencerService } from "../../services/sequencer.service";
import { Subscription } from "rxjs/Rx";
import { PlayerService } from "../../services/player.service";
import {Howl, Howler} from 'howler';


@Component({
	selector: 'track-lane',
	templateUrl: './track-lane.component.html',
	styleUrls: ['./track-lane.component.scss']
})
export class TrackLaneComponent {

	@Input() track: Track;
	sequence: Subscription;

	private sound: Howl;

	constructor( private sequencerService: SequencerService, private playerService: PlayerService ){
	}


	ngOnInit(): void {
		this.sequence = this.sequencerService.sequence.subscribe( ( step: number ) =>  this.setActiveStep(step) );
		// Setup the new Howl.
		this.sound = new Howl({
			src: [`assets/samples/${this.track.sound}`]
		});
	}

	ngOnDestroy(): void {
		if(this.sequence){
			this.sequence.unsubscribe();
		}
	}

	setActiveStep( stepNumber: number ){
		if( stepNumber >= 0 ){
			const step = this.track.steps[stepNumber];
			if(step.on && this.sound){
				this.sound.play();
				//this.playerService.play(this.track.sound, step.velocity);
			}
		}
	}



}
