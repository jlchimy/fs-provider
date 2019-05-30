import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property, Payment } from '../models/index';
import { PropertyService } from '../services/property.service';


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
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) 
  {
    this.properties = this.propertyService.getAllProperties();

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

  navToDetails(property: Property) {
    this.navCtrl
      .navigateBack('details', {
        queryParams: {
          propertyName: property.place,
          price: property.price,
          img: property.imgName, 
          id: property.id,
          stars: property.stars
        }
      });
  }

  ngOnInit() {
  }

}