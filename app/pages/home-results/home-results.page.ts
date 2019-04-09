import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController } from '@ionic/angular';


// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { RestApiService } from 'src/app/rest-api.service';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  yourLocation = '123 Test Street';
  Accessories = 'assets/img/cat/Accessories.jpg';
  Shirts = 'assets/img/cat/Shirts.jpg';
  Suits = 'assets/img/cat/Suits.jpg';
  Shoes = 'assets/img/cat/Shoes.jpg';
  Dresses = 'assets/img/cat/Dresses.jpg';
  Bags = 'assets/img/cat/Bags.jpg';
  ProductImage = 'assets/img/product/product-image.jpg';
  
  products: any;
  data: any;
  items:any;
  
  cart = [];
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public productApi:RestApiService,
    public loadingController: LoadingController, private cartService: CartService,private router: Router,
  ) {

  }

  ngOnInit() {
    this.getProducts();
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }



  async getProducts() {
    const loading = await this.loadingController.create({
     // content: 'Loading'
    });
    await loading.present();
    await this.productApi.getProducts()
      .subscribe(res => {
        console.log(res);
        this.data = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

  

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }


  
}
