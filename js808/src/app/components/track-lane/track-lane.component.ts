import { Component, Input, OnInit } from '@angular/core';
import { Track } from "../../models/track";

@Component({
	selector: 'track-lane',
	templateUrl: './track-lane.component.html',
	styleUrls: ['./track-lane.component.scss']
})
export class TrackLaneComponent {
	constructor(){
		
	}
	@Input() track: Track;
	
}
