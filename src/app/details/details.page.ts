import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public propertyName: string;
  public price: number;
  public imgName: string;
  private propertyID: number;
  public curr: Property;

  public properties: Array<Property>;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) { 
    this.properties = new Array();
    let capetown = new Property(300, "Cape Town", "assets/icon/capetown.jpg", 1);
    let rome = new Property(350, "Rome", "assets/icon/rome.jpg", 2);
    let odessa = new Property(350, "Odessa", "assets/icon/odessa.jpg", 3);
    this.properties.push(capetown);
    this.properties.push(rome);
    this.properties.push(odessa);

  }

  navToEdit() {
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          propertyName: this.curr.place,
          price: this.curr.price,
          img: this.curr.imgName
        }
      });
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.propertyName = data.params.propertyName;
      this.price = data.params.price;
      this.imgName = data.params.img;
      this.propertyID = data.params.id;
      //this.curr = new Property(this.price, this.propertyName, this.imgName, this.propertyID);

      this.properties.forEach(
        (property: Property) => {
          if (property.id == this.propertyID) {
            this.curr = property;
         }
       } 
      )
    }

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

}
