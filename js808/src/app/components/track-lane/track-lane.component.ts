import { Component, Input, OnInit } from '@angular/core';
import { Track } from "../../models/track";
import { SequencerService } from "../../services/sequencer.service";
import { Subscription } from "rxjs/Rx";
import { PlayerService } from "../../services/player.service";


@Component({
	selector: 'track-lane',
	templateUrl: './track-lane.component.html',
	styleUrls: ['./track-lane.component.scss']
})
export class TrackLaneComponent {

	@Input() track: Track;
	sequence: Subscription;

	constructor( private sequencerService: SequencerService, private playerService: PlayerService ){}


	ngOnInit(): void {
		this.sequence = this.sequencerService.sequence.subscribe( ( step: number ) =>  this.setActiveStep(step) );
	}

	ngOnDestroy(): void {
		this.sequence.unsubscribe();
	}

	setActiveStep( stepNumber: number ){
		if( stepNumber >= 0 ){
			const step = this.track.steps[stepNumber];
			if(step.on){
				this.playerService.play(this.track.sound, step.velocity);
			}


		}
	}



}
