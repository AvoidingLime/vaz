import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage {

  w1 = 'assets/img/walkthrough/w-1.png';
  w2 = 'assets/img/walkthrough/w-2.png';
  w3 = 'assets/img/walkthrough/w-3.png';

  constructor() { }

  ngOnInit() {
  }

}
