// awful variable names, but easy to preview pattern on code.
import { Sequence } from "./models/sequence";
import { Track } from "./models/track";
import { Step } from "./models/step";


function generateSequence( sequence: number[]): Step[]{
	return sequence.map( ( n ) => {
		return n ? { active: true } : { active: false };
	});
}

const fourInFloor = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ];
const accent      = [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ];
const offBeat     = [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ];
const empty       = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const all         = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
const alternate   = [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ];

const sequenceOne = new Sequence([
	new Track('Drums', generateSequence(fourInFloor)),
	new Track('Snare', generateSequence(offBeat) ),
	new Track('Open Hat', generateSequence(accent) ),
	new Track('Closed Hat', generateSequence(fourInFloor) )
]);

const sequenceTwo = new Sequence([
	new Track('Drums', generateSequence(fourInFloor) ),
	new Track('Snare', generateSequence(offBeat) ),
	new Track('Open Hat', generateSequence(empty) ),
	new Track('Closed Hat', generateSequence(all) )
]);

const sequenceTree = new Sequence([
	new Track('Drums', generateSequence(alternate) ),
	new Track('Snare', generateSequence(fourInFloor) ),
	new Track('Open Hat', generateSequence(empty) ),
	new Track('Closed Hat', generateSequence(all) )
]);

export const sequences = [sequenceOne, sequenceTwo, sequenceTree];