import { Component, Input } from '@angular/core';
import { StepIndicator } from "../../models/step";


@Component({
	selector: 'step-indicator',
	templateUrl: './step-indicator.component.html',
	styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent {

	@Input() step: StepIndicator;

	constructor(){}


}
