import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public propertyName: string;
  public price: number;
  public imgName: string;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) {}

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
