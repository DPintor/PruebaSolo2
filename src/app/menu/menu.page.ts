import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  navigate: any;
  ngOnInit() {}
  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
                    this.sideMenu();
                    this.initializeApp();
              }

initializeApp() {
this.platform.ready().then(() => {
this.statusBar.styleDefault();
this.splashScreen.hide();
});
}

sideMenu() {
this.navigate =
[
{
title : 'Home',
url   : '//menu',
icon  : 'home'
},
{
title : 'Chat',
url   : '/menu',
icon  : 'chatbubbles'
},
{
title : 'Contacts',
url   : '/menu',
icon  : 'man'
},
{
title : 'Exit',
url   : '/login',
icon  : 'exit'
}
];
}
}
