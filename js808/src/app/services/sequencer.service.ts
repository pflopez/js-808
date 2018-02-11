import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription, BehaviorSubject } from "rxjs/Rx";

const totalSteps = 16;

@Injectable()
export class SequencerService {

	private timer = Observable.timer(0, this.bpmToMiliseconds() );
	private timeSub: Subscription;
	
	sequence = new BehaviorSubject(-1);

	constructor() { }
	
	
	start(){
		this.timeSub = this.timer.subscribe( ( step: number )=> {
			this.sequence.next(step % totalSteps);
		} );
	}
	
	stop(){
		//reset sequence
		this.sequence.next(-1);
		this.timeSub.unsubscribe();
	}


	private bpmToMiliseconds(): number{
		return 500;
	}


}
