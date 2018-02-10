import { Track } from "./track";
export class Sequence {
	tracks: Track[];
	
	constructor(tracks: Track[]){
		this.tracks = tracks;
	}
}