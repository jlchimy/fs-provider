import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public propertyName: string;
  public price: number;
  public imgName: string;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  navToEdit() {
    this.navCtrl.navigateForward('edit');
  }

  ngOnInit() {
    let receivedQueryParams = function(data: any) {
      arrow(data);
    }

    let arrow = (data: any) => {
      this.propertyName = data.params.propertyName;
      this.price = data.params.price;
      this.imgName = data.params.img;
    }

    this.activatedRoute.queryParamMap.subscribe(
      receivedQueryParams
    );
  }

}
