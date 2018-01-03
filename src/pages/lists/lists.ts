import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  public items = ["11111", "22222", "33333", "444444"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  itemSelected(item) {
    console.log(item);
  }
}
