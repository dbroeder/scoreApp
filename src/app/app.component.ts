import { Component,NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {GameData} from '../providers/game-data';
import {PlayerData} from '../providers/player-data';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  public games;
  public players;
  constructor(platform: Platform,public gameData: GameData,public playerData: PlayerData,public zone: NgZone) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.gameData.initDB();

      this.gameData.getAll().then(data => {
        this.zone.run(()=>{
          this.games = data;
        });
      }).catch(console.error.bind(console));

      this.playerData.initDB();

      this.playerData.getAll().then(data => {
        this.zone.run(()=>{
          this.players = data;
        });
      }).catch(console.error.bind(console));


    });
  }
}
