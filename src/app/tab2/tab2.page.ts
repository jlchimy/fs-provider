import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public minDate: string;
  public startDate: string;

  public property: any = {
    name: "",
    location: "",
    imgURL: "",
    price: 0,
    userId: 1
  };

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) {
    this.minDate = new Date().toISOString();
    this.startDate = new Date().toISOString();

  }

  navToRentals() {
    this.httpClient
      .post("http://localhost:5000/api/properties", this.property)
      .subscribe((response: any) => {
        this.navCtrl
          .navigateForward('tabs', {
            queryParams: {
              userId: response.id
            }
          });
      },
      (err) => {
        // console.log(err);
        this.presentAlert();
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: 'Property listing already exists',
      // message: 'Maybe you\'ve been here before.',
      buttons: ['Try again']
    });
  }

  ngOnInit() {
  }

}
