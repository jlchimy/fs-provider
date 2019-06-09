import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public name: string;
  public location: string;
  public price: number;
  public imgURL: string;
  private propertyID: number;
  public numStars: number;
  public curr: Property;

  public properties: Array<Property>;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) { 
  }

  navToEdit() {
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          name: this.curr.name,
          location: this.curr.location,
          price: this.curr.price,
          imgURL: this.curr.imgURL
        }
      });
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.name = data.params.name;
      this.location = data.params.location;
      this.price = data.params.price;
      this.imgURL = data.params.imgURL;
      this.propertyID = data.params.id;
      this.numStars = data.params.stars;

      this.curr = 
        this.propertyService.findPropertyById(this.propertyID);

      if (!this.curr) {
        alert("Property Not Found");
      }

    }

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

}
