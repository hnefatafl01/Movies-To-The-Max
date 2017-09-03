import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadingEmitter = new EventEmitter <string>();
  // loading = 'Loading';
  constructor() { }

  ngOnInit() {
  }

    // while (this.res === undefined) {
    //   setInterval(() => {
    //     if (this.loading === 'Loading...') {
    //       this.loading = 'Loading';
    //     }
    //     this.loading += '.';
    //     this.loadingEmitter.emit(this.loading);
    //   }, 1000);
    // }
}
