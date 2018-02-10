import { Component, Input, OnInit } from '@angular/core';
import { StepIndicator } from "../../models/step";


@Component({
	selector: 'step-indicator-lane',
	templateUrl: './step-indicator-lane.component.html',
	styleUrls: ['./step-indicator-lane.component.scss']
})
export class StepIndicatorLaneComponent {

	steps: StepIndicator[];

	constructor(){
		this.steps = Array(16).fill( { active: false } );
	}


}
