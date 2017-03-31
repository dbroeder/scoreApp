import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {NewPlayerPage} from '../new-player/new-player';
import {HomePage} from '../home/home';
/*
  Generated class for the PlayerOptions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-player-options',
  templateUrl: 'player-options.html'
})
export class PlayerOptionsPage {

  public back = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modCtrl:ModalController) {
    this.back=navParams.get('b');
    if(this.back){
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerOptionsPage');
  }
  addPlayer(){
    let modal = this.modCtrl.create(NewPlayerPage);
    modal.onDidDismiss(b=>{this.navCtrl.pop()});
    modal.present();
  }

  

  editPlayer(){
    
  }

  deletePlayer(){
    
  }

}
