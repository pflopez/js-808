import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StepIndicator } from "../../models/step";


@Component({
	selector: 'sequence-selector',
	templateUrl: './sequence-selector.component.html',
	styleUrls: ['./sequence-selector.component.scss']
})
export class SequenceSelectorComponent {

	@Input() steps: StepIndicator[];
	@Output() changeSequence = new EventEmitter<number>();

	active = 0;

	constructor(){
		this.steps = Array(3).fill({}).map( ()=> { return { active: false } } );

		this.steps[this.active].active = true;
	}


	changeStep(){
		this.active = (this.active + 1 ) % 3;
		this.steps.forEach( ( step , index )=> {
			step.active = (index === this.active);
		});
		this.changeSequence.emit(this.active);

	}

}
