import { Component } from '@angular/core';
import { sequences } from "./demo-tracks";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sequences = sequences;
  sequence = sequences[0];

  constructor(){}

  changeSequence(index){
    this.sequence = sequences[index];
  }
}
