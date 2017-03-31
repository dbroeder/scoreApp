import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import {NewGamePage} from '../new-game/new-game';
import {AboutPage} from '../about/about';

/*
  Generated class for the GameOptions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-options',
  templateUrl: 'game-options.html'
})
export class GameOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameOptionsPage');
  }

  newGame()
  {
    let b = false;
    let modal = this.modalCtrl.create(NewGamePage);
    modal.onDidDismiss(b=>{
      this.viewCtrl.dismiss(b);
    });
    modal.present();
  }

  deleteSavedGame()
  {
    let b = true;
    this.viewCtrl.dismiss(b);
  }

}
