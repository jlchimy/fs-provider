import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public name: string;
  public location: string;
  public price: number;
  public imgURL: string;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let receivedQueryParams = function(data: any) {
      arrow(data);
    }

    let arrow = (data: any) => {
      this.name = data.params.name;
      this.location = data.params.location;
      this.price = data.params.price;
      this.imgURL = data.params.imgURL;
    }

    this.activatedRoute.queryParamMap.subscribe(
      receivedQueryParams
    );
  }

}
