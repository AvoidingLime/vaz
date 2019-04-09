import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage  {

  Platinum = 'assets/img/subscriptions/Platinum.png';
  Gold = 'assets/img/subscriptions/Gold.png';
  Silver = 'assets/img/subscriptions/Silver.png';
  Bronze = 'assets/img/subscriptions/Bronze.png';

  constructor() { }

  ngOnInit() {
  }

}
