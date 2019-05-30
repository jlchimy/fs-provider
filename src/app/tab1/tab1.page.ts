import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property, Payment } from '../models/index';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public properties: Array<Property>;
  public payments: string[];

  public users: Array<User>;

  constructor(
    private navCtrl: NavController
  ) {
    this.properties = new Array();
    let capetown = new Property(300, "Cape Town", "assets/icon/capetown.jpg", "navToDetails");
    let rome = new Property(350, "Rome", "assets/icon/rome.jpg", "navToDetails");
    let odessa = new Property(350, "Odessa", "assets/icon/odessa.jpg", "navToDetails");
    this.properties.push(capetown);
    this.properties.push(rome);
    this.properties.push(odessa);

    this.users = new Array();

    let user1 = new User();
    user1.firstname = "Jacob";
    user1.lastname = "Chimerine";

    let user2 = new User();
    user1.firstname = "John";
    user1.lastname = "Doe";

    this.users.push(user1);
    this.users.push(user2);
  }

  navToLogin() {
    this.navCtrl.navigateBack('');
  }

  navToDetails() {
    this.navCtrl.navigateBack('details');
  }

  ngOnInit() {
  }

}