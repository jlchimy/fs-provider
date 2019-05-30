import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property, Payment } from '../models/index';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public properties: Array<Property>;
  public payments: string[];

  public users: Array<User>;

  constructor(
    private navCtrl: NavController
  ) {
    this.properties = new Array();
    let capetown = new Property(300, "Cape Town", "assets/icon/capetown.jpg", 1);
    let rome = new Property(350, "Rome", "assets/icon/rome.jpg", 2);
    let odessa = new Property(350, "Odessa", "assets/icon/odessa.jpg", 3);
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

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToEdit(property: Property) {
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          propertyName: property.place,
          price: property.price,
          img: property.imgName,
          id: property.id
        }
      });
  }

  ngOnInit() {
  }

}