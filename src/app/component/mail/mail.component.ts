import { Component, OnInit, Input } from '@angular/core';
import { MailDataService } from 'src/app/service/mail-data.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {

  @Input() mail:any;

  constructor(private mailService:MailDataService,  ) {
   }

  ngOnInit() {

  
  }



}
