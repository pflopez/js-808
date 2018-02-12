import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription, BehaviorSubject } from "rxjs/Rx";

const totalSteps = 16;

@Injectable()
export class SequencerService {

	private bpm = 120;

	private timer = Observable.timer(0, this.bpmToMs(this.bpm) );
	private timeSub: Subscription;
	
	sequence = new BehaviorSubject(-1);

	constructor() { }
	
	getBpm(): number {
		return this.bpm;
	}
	
	setBpm(bpm: number){
		this.bpm = bpm;
		this.timer = Observable.timer(0, this.bpmToMs(this.bpm) );
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
