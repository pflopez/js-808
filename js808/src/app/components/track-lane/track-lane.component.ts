import { Component, Input } from '@angular/core';
import { Track } from "../../models/track";
import { SequencerService } from "../../services/sequencer.service";
import { Subscription } from "rxjs/Rx";
import { PlayerService } from "../../services/player.service";
import {Howl} from 'howler';
import { StepIndicator } from "../../models/step";


@Component({
	selector: 'track-lane',
	templateUrl: './track-lane.component.html',
	styleUrls: ['./track-lane.component.scss']
})
export class TrackLaneComponent {

	@Input() track: Track;
	sequence: Subscription;
	stepsIndicators: StepIndicator[];
	
	private sound: Howl;

	constructor( private sequencerService: SequencerService, private playerService: PlayerService ){
		this.stepsIndicators = Array(16).fill({}).map( ()=> { return { active: false } } );
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
				this.sound.volume( step.velocity.volume );
				this.sound.play();
			}
		}
		this.stepsIndicators.forEach( (step) => { step.active = false } );
		if(stepNumber >= 0){
			this.stepsIndicators[stepNumber].active = true;
		}
	}

}
