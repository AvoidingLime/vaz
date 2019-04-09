import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'products/:id', loadChildren: './pages/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'stores', loadChildren: './pages/stores/stores.module#StoresPageModule' },
  { path: 'store-single', loadChildren: './pages/store-single/store-single.module#StoreSinglePageModule' },
  { path: 'subscriptions', loadChildren: './pages/subscriptions/subscriptions.module#SubscriptionsPageModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'wallet', loadChildren: './pages/wallet/wallet.module#WalletPageModule' },
  { path: 'walkthrough', loadChildren: './pages/walkthrough/walkthrough.module#WalkthroughPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
