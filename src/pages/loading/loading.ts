import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  public

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  showLoading() {
    let loading = this.loadingController.create({
      content: "Please wait...",
      duration: 3000
    });
    loading.present();
  }

}
