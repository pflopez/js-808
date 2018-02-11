import { Step } from "./step";
export class Track {
	instrument: string;
	steps: Step[];
	sound: string;
	
	
	constructor(instrumentName: string, steps: Step[], sound: string = ''){
		this.steps = steps;
		this.instrument = instrumentName;
		this.sound = sound;
	}
	
	
}