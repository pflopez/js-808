import { Velocity } from "./velocity";
export interface Step {
	on: boolean;
	velocity?: Velocity;
}

export interface StepIndicator {
	active: boolean;
}