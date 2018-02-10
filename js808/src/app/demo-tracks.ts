// awful variable names, but easy to preview pattern on code.
import { Sequence } from "./models/sequence";
import { Track } from "./models/track";
const O = { active: true };
const x = { active: false };
const fourInFloor = [ O, x, x, x, O, x, x, x, O, x, x, x, O, x, x, x  ];
const accent      = [ x, x, O, x, x, x, O, x, x, x, O, x, x, x, O, x  ];
const offBeat     = [ x, x, x, x, O, x, x, x, x, x, x, x, O, x, x, x  ];
const empty       = [ x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x  ];
const all         = [ O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O  ];
const alternate   = [ O, x, O, x, O, x, O, x, O, x, O, x, O, x, O, x  ];

export let sequenceOne = new Sequence([
	new Track('Drums', fourInFloor),
	new Track('Snare', offBeat),
	new Track('Open Hat', accent),
	new Track('Closed Hat', fourInFloor)
]);

export let sequenceTwo = new Sequence([
	new Track('Drums', fourInFloor),
	new Track('Snare', offBeat),
	new Track('Open Hat', empty),
	new Track('Closed Hat', all)
]);

export let sequenceTree = new Sequence([
	new Track('Drums', alternate),
	new Track('Snare', fourInFloor),
	new Track('Open Hat', empty),
	new Track('Closed Hat', all)
]);