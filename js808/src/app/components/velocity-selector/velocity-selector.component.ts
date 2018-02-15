import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StepIndicator } from "../../models/step";


@Component({
	selector: 'velocity-selector',
	templateUrl: './velocity-selector.component.html',
	styleUrls: ['./velocity-selector.component.scss']
})
export class VelocitySelectorComponent {

	@Input() steps: StepIndicator[];
	@Output() changeVelocity= new EventEmitter<number>();

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
		this.changeVelocity.emit(this.active);

	}

}
