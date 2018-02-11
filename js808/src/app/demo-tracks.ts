
import { Sequence } from "./models/sequence";
import { Track } from "./models/track";
import { Step } from "./models/step";


function generateSequence( sequence: number[]): Step[]{
	return sequence.map( ( n ) => {
		return n ? { on: true , velocity: 100 } : { on: false , velocity: 100 };
	});
}

const fourInFloor = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ];
const accent      = [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ];
const offBeat     = [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ];
const empty       = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const all         = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
const alternate   = [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ];

const sequenceOne = new Sequence([
	new Track('Drums', generateSequence(fourInFloor), 'drum.wav'),
	new Track('Snare', generateSequence(offBeat), 'snare.wav' ),
	new Track('Open Hat', generateSequence(accent), 'open-hat.wav'),
	new Track('Closed Hat', generateSequence(fourInFloor), 'closed-hat.wav')
]);

const sequenceTwo = new Sequence([
	new Track('Drums', generateSequence(fourInFloor), 'drum.wav'),
	new Track('Snare', generateSequence(offBeat), 'snare.wav' ),
	new Track('Open Hat', generateSequence(empty), 'open-hat.wav'),
	new Track('Closed Hat', generateSequence(all), 'closed-hat.wav')
]);

const sequenceTree = new Sequence([
	new Track('Drums', generateSequence(alternate), 'drum.wav'),
	new Track('Snare', generateSequence(fourInFloor), 'snare.wav' ),
	new Track('Open Hat', generateSequence(empty), 'open-hat.wav'),
	new Track('Closed Hat', generateSequence(all), 'closed-hat.wav')
]);

export const sequences = [sequenceOne, sequenceTwo, sequenceTree];