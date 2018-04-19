import { TestBed, inject, fakeAsync, tick, async } from '@angular/core/testing';
import { SequencerService } from "./sequencer.service";
import { FormsModule } from "@angular/forms";
import Spy = jasmine.Spy;

let service: SequencerService;
let successFn: Spy;

describe('SequencerService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			providers: [SequencerService],
		});

		service = TestBed.get(SequencerService);
		successFn = jasmine.createSpy('spy');
	});
	

	function testBpm(bpm){
		let successFn = jasmine.createSpy('spy');
		let interval = setInterval( successFn, service.bpmToMs(bpm));
		tick( 1000 * 60 ); // 1 min
		expect(successFn).toHaveBeenCalledTimes( 4 * bpm );
		clearInterval(interval);
	}

	it('should provide correct bpm to millisecond conversion', fakeAsync( () => {
		// picked easy round bpmToMs conversion values...
		testBpm(60);
		testBpm(120);
		testBpm(132);
	}) );
	
	it('should be triggered the right number of beats per minute',  fakeAsync(  ()=>{
		expect(successFn).not.toHaveBeenCalled();
		service.sequence.subscribe( successFn);

		let lastTimeCalled = 1;

		// first time called with -1 (stop)
		expect(successFn).toHaveBeenCalledWith(-1);
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled);

		service.setBpm(60);
		service.start();
		tick( 1000 );
		/*
		First time called with stop (1) when subscribed
		Then 4 beats + last beat
		(or beat 0 + 4)

		           0     0.25   0.50   0.75   1.00
		 |.........|------|------|------|------|........
		-1         1      2      3      4      5
		 */

		lastTimeCalled = lastTimeCalled + 4 + 1;
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled);
		expect(successFn.calls.mostRecent().args[0]).toBe(4);

		tick( 2000 );
		lastTimeCalled = lastTimeCalled + 8 ;
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled);
		expect(successFn.calls.mostRecent().args[0]).toBe( 4 + 8 );

		service.stop();
		// should add one more for the stop
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled + 1);
		expect(successFn.calls.mostRecent().args[0]).toBe( -1);

		successFn.calls.reset();
		lastTimeCalled = 0;
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled);

		service.setBpm(120);
		service.start();
		tick( 1000 );
		lastTimeCalled = 8 + 1;
		expect(successFn).toHaveBeenCalledTimes(lastTimeCalled);
		expect(successFn.calls.mostRecent().args[0]).toBe( 8 );
		tick( 1000 );
		lastTimeCalled = 8 + lastTimeCalled;
		expect(successFn).toHaveBeenCalledTimes( lastTimeCalled );
		// 8 + 8 = 16  -> full bar, reset counter to  0.
		expect(successFn.calls.mostRecent().args[0]).toBe( 0);
		service.stop();
		expect(successFn).toHaveBeenCalledTimes( lastTimeCalled + 1 );
		expect(successFn.calls.mostRecent().args[0]).toBe( -1);

	}) );

	it('should provide correct step number based on BPM time', fakeAsync( () => {

		let step = 0;
		let sequence = service.sequence.subscribe( (v) => step = v );

		service.setBpm(60);
		service.start();
		tick( 1000 ); // 1 min
		expect(step).toBe(4);
		
		tick( 1000 ); // 1 min
		expect(step).toBe(8);
		
		service.stop();

		service.setBpm(120);
		service.start();
		
		tick( 1000 ); // 1 min
		expect(step).toBe(8);
		
		tick( 1000 ); // 1 min
		expect(step).toBe(0); // resets to 0 pos
		
		service.stop();
		sequence.unsubscribe();
		
	}) );

});