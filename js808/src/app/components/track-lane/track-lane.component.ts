import { Component, Input } from '@angular/core';
import { Track } from "../../models/track";
import { SequencerService } from "../../services/sequencer.service";
import { Subscription } from "rxjs/Rx";
import { PlayerService } from "../../services/player.service";
import {Howl} from 'howler';


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
				this.sound.volume( this.velocityToVolume(step.velocity) );
				this.sound.play();
			}
		}
	}


	velocityToVolume( vel ){
		if(vel === 0){
			return 0.25
		}
		if(vel === 1 ){
			return 0.66;
		}
		if(vel === 2){
			return 1;
		}
	}


}
