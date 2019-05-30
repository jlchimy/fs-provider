import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public minDate: string;
  public startDate: string;

  constructor(
    private navCtrl: NavController
  ) {
    this.minDate = new Date().toISOString();
    this.startDate = new Date().toISOString();

  }

  navToRentals() {
    this.navCtrl.navigateForward('tabs');
  }

  ngOnInit() {
  }

}
