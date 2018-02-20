import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StepIndicator } from "../../models/step";
import { VelocityIndicator } from "../../models/velocity";
import { VELOCITY_LOW, VELOCITY_MED, VELOCITY_HIGH } from "../../services/sequencer.service";


@Component({
	selector: 'velocity-selector',
	templateUrl: './velocity-selector.component.html',
	styleUrls: ['./velocity-selector.component.scss']
})
export class VelocitySelectorComponent {

 	steps: VelocityIndicator[];
	@Output() changeVelocity= new EventEmitter<number>();

	active = 0;

	constructor(){
		this.steps = Array(3).fill({}).map( (v, index)=> { return { active: false, label: this.getLabel(index)  } } );

		this.steps[this.active].active = true;
	}

	getLabel(index: number): string {
		switch (index) {
			case 0:
				return VELOCITY_LOW.label;
			case 1:
				return VELOCITY_MED.label;
			case 2:
				return VELOCITY_HIGH.label;
		}
	}


	changeStep(){
		this.active = (this.active + 1 ) % 3;
		this.steps.forEach( ( step , index )=> {
			step.active = (index === this.active);
		});
		this.changeVelocity.emit(this.active);

	}

}
