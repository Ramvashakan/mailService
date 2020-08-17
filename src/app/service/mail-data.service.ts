import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MailDataService {

  mailList = [];

  constructor( private storage:Storage) { 
  }


  getData(to:any,content:any){


    this.mailList.push({
      To:to,
      Content:content
    });    

    this.storage.set('mail',JSON.stringify(this.mailList));

  }

  getList() {

    this.storage.get('mail').then((val)=>{

      this.mailList = JSON.parse(val);

     


    });

    return this.mailList
  }

}
