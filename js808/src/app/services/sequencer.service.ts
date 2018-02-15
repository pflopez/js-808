import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription, BehaviorSubject } from "rxjs/Rx";
import { Velocity } from "../models/velocity";

const totalSteps = 16;



export const VELOCITY_LOW  = { volume: 0.23, label: 'low' };
export const VELOCITY_MED  = { volume: 0.66, label: 'med' };
export const VELOCITY_HIGH = { volume: 1,    label: 'high' };
	

@Injectable()
export class SequencerService {

	private bpm = 120;

	private timer = Observable.timer(0, this.bpmToMs(this.bpm) );
	private timeSub: Subscription;

	private seqVelocity: Velocity = VELOCITY_LOW;
	
	sequence = new BehaviorSubject(-1);

	constructor() { }
	
	getBpm(): number {
		return this.bpm;
	}
	
	setBpm(bpm: number){
		this.bpm = bpm;
		this.timer = Observable.timer(0, this.bpmToMs(this.bpm) );
	}
	
	setSequencerVelocity( pos: number ){
		switch (pos) {
			case 0:
				this.seqVelocity = VELOCITY_LOW;
				break
			case 1:
				this.seqVelocity = VELOCITY_MED;
				break;
			case 2:
				this.seqVelocity = VELOCITY_HIGH;
				break
		}
		
	}

	getSequencerVelocity(){
		return this.seqVelocity;
	}


	start(){
		this.timeSub = this.timer.subscribe( ( step: number )=> {
			this.sequence.next(step % totalSteps);
		} );
	}
	
	stop(){
		//reset sequence
		this.sequence.next(-1);
		if(this.timeSub){
			this.timeSub.unsubscribe();
			this.timeSub = null;
		}

	}


	bpmToMs(bpm): number {
		return (( 60000 / bpm ) / 4 ) ;
	}


}
