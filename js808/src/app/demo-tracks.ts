
import { Sequence } from "./models/sequence";
import { Track } from "./models/track";
import { Step } from "./models/step";


function generateSequence( sequence: number[]): Step[]{
	return sequence.map( ( n ) => {
		return n ? { on: true , velocity: 2 } : { on: false , velocity: 2 };
	});
}

const fourInFloor = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ];
const accent      = [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ];
const offBeat     = [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ];
const empty       = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const all         = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
const alternate   = [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ];

const sequenceOne = new Sequence([
	new Track('Drums', generateSequence(fourInFloor), 'kick.m4a'),
	new Track('Snare', generateSequence(offBeat), 'snare.m4a' ),
	new Track('Open Hat', generateSequence(accent), 'open-hit-hat.m4a'),
	new Track('Closed Hat', generateSequence(fourInFloor), 'closed-hit-hat.m4a')
]);

const sequenceTwo = new Sequence([
	new Track('Drums', generateSequence(fourInFloor), 'kick.m4a'),
	new Track('Snare', generateSequence(offBeat), 'snare.m4a' ),
	new Track('Open Hat', generateSequence(empty), 'open-hit-hat.m4a'),
	new Track('Closed Hat', generateSequence(all), 'closed-hit-hat.m4a')
]);

const sequenceTree = new Sequence([
	new Track('Drums', generateSequence(alternate), 'kick.m4a'),
	new Track('Snare', generateSequence(fourInFloor), 'snare.m4a' ),
	new Track('Open Hat', generateSequence(empty), 'open-hit-hat.m4a'),
	new Track('Closed Hat', generateSequence(all), 'closed-hit-hat.m4a')
]);

export const sequences = [sequenceOne, sequenceTwo, sequenceTree];