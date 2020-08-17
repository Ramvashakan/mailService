import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MailDataService } from './service/mail-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private mailService:MailDataService
  
    ) {

      this.mailService.getList();
      setTimeout(()=>{
        this.initializeApp();
      },2000)
      
      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

     // this.checkDarkTheme();

    });

  }  
  // checkDarkTheme(){

  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //   console.log(prefersDark.matches)

  //   if(prefersDark.matches){
  //     document.body.classList.toggle( 'dark' );
  //   }

  // }

}
