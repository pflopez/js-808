import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
	constructor() { }


	// TODO placeholder
	play(sound: string, velocity: number){
		console.log(`trigger ${sound} with ${velocity} velocity`);
	}

}
