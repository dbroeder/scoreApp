import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewPlayerPage } from '../pages/new-player/new-player';
import { NewGamePage } from '../pages/new-game/new-game';
import { GameOptionsPage } from '../pages/game-options/game-options';
import {PlayerOptionsPage} from '../pages/player-options/player-options';
import {PlayerData} from '../providers/player-data';
import {GameData} from '../providers/game-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewPlayerPage,
    NewGamePage,
    GameOptionsPage,
    PlayerOptionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewPlayerPage,
    NewGamePage,
    GameOptionsPage,
    PlayerOptionsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},PlayerData,GameData]
})
export class AppModule {}
