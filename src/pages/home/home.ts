import { Component, NgZone } from '@angular/core';
import { NewPlayerPage } from '../new-player/new-player';
import { NavController, ModalController,PopoverController, Platform } from 'ionic-angular';
import {PlayerOptionsPage} from '../player-options/player-options';
import {PlayerData} from '../../providers/player-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public modal;
  public players = [];
 

  constructor(public playerData: PlayerData,
  public navCtrl: NavController,
  public popCtrl:PopoverController, 
  public zone: NgZone, 
  public platform: Platform) {
    
  }

  ionViewDidLoad(){
    
    this.platform.ready().then(()=>{
      this.players=this.playerData.getPlayers();
    });
    
    
  }
  

  openPlayerMenu(myEvent){
    
    let presenter = this.popCtrl.create(PlayerOptionsPage);
    presenter.present({
      ev: myEvent
    });
    
  }

  deletePlayer(){

  }

}
