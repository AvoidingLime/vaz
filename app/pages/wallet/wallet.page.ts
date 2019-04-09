import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  myChart: Chart;

  @ViewChild('chartContainer') chartcontainer: ElementRef;
  @ViewChild('chartcanvas') chartcanvas: ElementRef;

  constructor() { }

  ngAfterViewInit() {

    this.createChart();

  }

  createChart() {   
    this.myChart = new Chart(this.chartcanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Account Balance', 'Used'],
        datasets: [{
          label: '# of Subscription Tokens',
          data: [200, 80],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
            
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
           
            
          ],
          borderWidth: 2
        }]
      },
      options: {
        
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }



  ngOnInit() {
  }

}
