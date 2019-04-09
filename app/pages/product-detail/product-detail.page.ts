import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../rest-api.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage {

  ProductImage = 'assets/img/product/product-image.jpg';

  product: any = {};


  constructor(public api: RestApiService,public loadingController: LoadingController,  public route: ActivatedRoute,  public router: Router) { }

  ngOnInit() {

    this.getProduct();
  }

  async getProduct() {
    const loading = await this.loadingController.create({
      // content: 'Loading'
    });
    await loading.present();
    await this.api.getProductById(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.product = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
