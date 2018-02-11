import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StepIndicator } from "../../models/step";
import { SequencerService } from "../../services/sequencer.service";
import { Subscription } from "rxjs/Rx";


@Component({
	selector: 'step-indicator-lane',
	templateUrl: './step-indicator-lane.component.html',
	styleUrls: ['./step-indicator-lane.component.scss']
})
export class StepIndicatorLaneComponent implements OnInit, OnDestroy{
	
	steps: StepIndicator[];
	sequence: Subscription;

	constructor( private sequencerService: SequencerService ){
		this.steps = Array(16).fill({}).map( ()=> { return { active: false } } );

	}

	ngOnInit(): void {
		this.sequence = this.sequencerService.sequence.subscribe( ( step: number ) =>  this.setActiveStep(step) );
	}

	ngOnDestroy(): void {
		this.sequence.unsubscribe();
	}

	setActiveStep( step: number ): void {
		
		this.steps.forEach( (step) => { step.active = false } );
		if(step >= 0){
			this.steps[step].active = true;	
		}
		

	}


}
