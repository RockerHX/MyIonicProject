import { Component } from '@angular/core';

/**
 * Generated class for the DatetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatetimePage');
  }
  
  printDate(): void {
    console.log(this.event);
  }

}
