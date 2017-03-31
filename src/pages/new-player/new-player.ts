import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {PlayerData} from '../../providers/player-data';
/*
  Generated class for the NewPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-player',
  templateUrl: 'new-player.html'
})
export class NewPlayerPage {

  public player: any = {};
  todo:FormGroup;
  public data={
    name: '',
    score: 0
  }
  constructor(public formBld:FormBuilder, 
  public navCtrl: NavController, 
  public navParams: NavParams,
  public viewCtrl: ViewController,
  public playerData: PlayerData) {
    this.todo = formBld.group({
      player_name: ['',Validators.required]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlayerPage');
  }

  create(){
    this.player.name = this.data.name;
    this.player.score = this.data.score;
    this.player.games = 0;
    this.player.wins = 0;
    this.playerData.add(this.player).catch(console.error.bind(console));
    this.viewCtrl.dismiss();
  }
  back(){
    this.viewCtrl.dismiss();
  }

}
