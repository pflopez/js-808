import { Component, Input } from '@angular/core';
import { Step } from "../../models/step";

@Component({
	selector: 'step-button',
	templateUrl: './step-button.component.html',
	styleUrls: ['./step-button.component.scss']
})
export class StepButtonComponent {
	@Input() step: Step;
}
