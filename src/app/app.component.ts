import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  get answer() {
    return this.time.getHours() >= 11;
  }

  constructor() {
    Observable.interval(1000).subscribe(() => {
      this.time = new Date();
    });
  }
}
