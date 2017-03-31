import { Component,NgZone } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController,Platform } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {PlayerData} from '../../providers/player-data';
import {NewPlayerPage} from '../new-player/new-player';
import {GameData} from '../../providers/game-data';

/*
  Generated class for the NewGame page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html'
})
export class NewGamePage {

  public game = {
    title:'',
    players:[]
  };
  todo:FormGroup;
  public playerList=[];
  public players = [];
  data = {
    gameTitle: ''
  }

  constructor(public platform: Platform,
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public viewCtrl: ViewController,
  public modalCtrl:ModalController,
  public formBld: FormBuilder,
  public playerData: PlayerData,
  public zone: NgZone,
  public gameData: GameData) {
    this.todo = formBld.group({
      title: ['',Validators.required],
      players: [null,Validators.required]
    });
  }

  onPlayersChecked($event)
  {
    if(! $event.checked)
    {
      this.todo.patchValue({players: null});
    }
  }

  ionViewDidLoad() {
    this.players=this.playerData.getPlayers();
  }

  create(){
    this.game.title = this.data.gameTitle;
    
    
    this.game.players.push(this.playerList);
      
    
    console.log(this.playerList);
    this.gameData.addGame(this.game);
    let b = false;
    this.navCtrl.pop(b);
  }

  back(){
    this.navCtrl.pop(AboutPage);
  }

  customTrackBy(index: number, obj: any): any {
	  return index;
  }

  newPlayer(){
    let modal = this.modalCtrl.create(NewPlayerPage);
    modal.present();
  }

  getPlayer(player)
  {
    let b = true;
    for(let i=0;i<this.playerList.length;i++)
    {
      if(player==this.playerList[i])
      {
        this.playerList.splice(i);
        b = false;
      }
    }
    if(b == true)
    {
      this.playerList.push(player);
    }
  }

}
