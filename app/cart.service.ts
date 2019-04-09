import { Injectable } from '@angular/core';
import {LoadingController } from '@ionic/angular';

import { RestApiService } from 'src/app/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  constructor(public productApi:RestApiService,
    public loadingController: LoadingController) { }

  private data = [];

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
 
  getCartProducts() {
     this.getProducts();
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}
