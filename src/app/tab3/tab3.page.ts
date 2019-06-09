import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property } from '../models/index';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public properties: Array<Property>;


  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) 
  {}

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToEdit(property: Property) {
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          name: property.name,
          location: property.location,
          price: property.price,
          imgURL: property.imgURL,
          id: property.id,
          stars: property.stars
        }
      });
  }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:5000/api/properties/" + localStorage.getItem("userId"))
      .subscribe(
        (response: Array<Property>) => {
          console.log(response);
          this.properties = response;
        }
      );
  }

}