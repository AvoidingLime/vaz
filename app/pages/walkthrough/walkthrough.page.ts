import { Component, ViewChild, OnInit } from '@angular/core';
import { HomeResultsPage } from '../home-results/home-results.page';
import { NavController, IonSlides } from '@ionic/angular';



@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage {
  @ViewChild(IonSlides) slides: IonSlides;

  w1 = '../img/walkthrough/w-1.png';
  w2 = '../img/walkthrough/w-2.png';
  w3 = '../img/walkthrough/w-3.png';

  skipMsg: string = "Skip"


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

skip() {
    
    this.navCtrl.navigateRoot('/register');
  }

slidesChanged() {
    if (this.slides.isEnd())
        this.skipMsg = "Alirght, Let's Get Started";

}

}
