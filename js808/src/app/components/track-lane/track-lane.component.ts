import { Component, Input, OnInit } from '@angular/core';
import { Track } from "../../models/track";

@Component({
	selector: 'track-lane',
	templateUrl: './track-lane.component.html',
	styleUrls: ['./track-lane.component.scss']
})
export class TrackLaneComponent implements OnInit{
	ngOnInit(): void {
		console.log("the track is ", this.track);
	}

	@Input() track: Track;


}
