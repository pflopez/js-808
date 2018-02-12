import { TestBed, inject, fakeAsync, tick, async } from '@angular/core/testing';
import { SequencerService } from "./sequencer.service";
import { FormsModule } from "@angular/forms";

let service: SequencerService;


describe('SequencerService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			providers: [SequencerService],
		});

		service = TestBed.get(SequencerService);
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

	it('should provide correct step number based on BPM time', fakeAsync( () => {

		let step = 0;
		// I wanted this test to be a little different, testing the 
		// number of times the subscriber was called.
		// I was not able to get the successFn.toHaveBeenCalledTimes to make sense.
		// let successFn = jasmine.createSpy('spy');
		// So I'm testing that Im getting the correct step number instead.
		

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