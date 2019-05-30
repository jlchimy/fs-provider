import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public days: Array<number>;

  constructor(
    private navCtrl: NavController
  ) {
    this.days = new Array();
    for (let i = 0; i < 31; i++) {
      this.days.push(i+1);
    }
  }

  navToRentals() {
    this.navCtrl.navigateForward('tabs');
  }

  ngOnInit() {
  }

}
