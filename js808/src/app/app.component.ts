import { Component } from '@angular/core';
import { sequenceOne } from "./demo-tracks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sequence = sequenceOne;
}
