import { Component , NgZone} from '@angular/core';
import { NewGamePage } from '../new-game/new-game';
import {GameOptionsPage} from '../game-options/game-options';
import { NavController, ModalController,PopoverController , Platform, NavParams} from 'ionic-angular';
import {PlayerData} from '../../providers/player-data';
import {GameData} from '../../providers/game-data';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public games=[];
  public deleteGames=[];
  public b=false;
  public game;

  constructor(public navCtrl: NavController,
  public popoverCtrl: PopoverController,
  public PlayerData: PlayerData,
  public platform:Platform,
  public playerData: PlayerData,
  public zone: NgZone,
  public gameData: GameData,
  public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.games=this.gameData.getGames();
  }

  selectGame(game)
  {
    this.deleteGames.push(game);
  }

  delete(){
    for(let i=0;i<this.deleteGames.length;i++)
    {
      this.gameData.deleteGame(this.deleteGames[i]);
    }
    this.games=this.gameData.getGames();
    this.b=false;
    
  }

  newGame(){
    this.b=false;
    this.navCtrl.push(NewGamePage);
  }

  presentMenu(myEvent){
    let presenter = this.popoverCtrl.create(GameOptionsPage);
    presenter.onDidDismiss((value)=>{
      
      this.b = value;
      console.log(this.b);
      
    });
    presenter.present({
      ev: myEvent
    });
  }
}
