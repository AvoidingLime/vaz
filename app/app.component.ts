import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
     

      {
        title: 'Categories',
        url: '/categories',
        direct: 'forward',
        icon: 'reorder'
      },

      {
        title: 'Wallet',
        url: '/wallet',
        direct: 'forward',
        icon: 'wallet'
      },

      {
        title: 'Subscriptions',
        url: '/subscriptions',
        direct: 'forward',
        icon: 'funnel'
      },
  
      {
        title: 'Orders',
        url: '/orders',
        direct: 'forward',
        icon: 'swap'
      },

      {
        title: 'Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },

      {
        title: 'Walkthrough',
        url: '/walkthrough',
        direct: 'forward',
        icon: 'cog'
      },

      {
        title: 'About Vazy',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
