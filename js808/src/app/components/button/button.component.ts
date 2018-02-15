import { Component, Input } from '@angular/core';

@Component({
	selector: 'button',
	templateUrl: './step-button.component.html',
	styleUrls: ['./step-button.component.scss']
})
export class StepButtonComponent {
	@Input() label: string;
	@Input() on = false;

	constructor( ){}
	
	toggle(){
		this.on = !this.on;
	}
}
