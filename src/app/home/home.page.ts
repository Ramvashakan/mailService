import { Component } from '@angular/core';
import { MailDataService } from '../service/mail-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CardView:boolean=false;

  to:any;
  content:any;
  

  darkMode:boolean = true;

  mailList = [];

  constructor(private mailService:MailDataService) {

    this.mailList = mailService.getList();

    console.log(this.mailList);

  }


  dark(){

    document.body.classList.toggle( 'dark' );

  }

  send(){

    this.mailService.getData(this.to,this.content);

    
    
  }

  close(){

    this.CardView = false

  }

  add(){
    this.CardView = true
    this.mailList = this.mailService.getList();
  }


}
