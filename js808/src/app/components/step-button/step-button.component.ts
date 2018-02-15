import { Component, Input } from '@angular/core';
import { Step } from "../../models/step";
import { SequencerService } from "../../services/sequencer.service";

@Component({
	selector: 'step-button',
	templateUrl: './step-button.component.html',
	styleUrls: ['./step-button.component.scss']
})
export class StepButtonComponent {
	@Input() step: Step;

	constructor( private sequencerService: SequencerService ){}
	
	toggle(){

		if(this.step.on && this.step.velocity !== this.sequencerService.getSequencerVelocity()  ){
			this.step.velocity = this.sequencerService.getSequencerVelocity();
		}else{
			this.step.on = !this.step.on;
			this.step.velocity = this.sequencerService.getSequencerVelocity();
		}
	}
}
