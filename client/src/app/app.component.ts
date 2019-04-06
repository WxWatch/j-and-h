import { Component, OnInit } from '@angular/core';
import { TempServiceService } from './temp/temp-service.service';

@Component({
  selector: 'jh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theTitleOfThePage = 'fsdfdsd';
  myStuff = null;

  onCustomEvent(text) {
    this.theTitleOfThePage = text;
    console.log('you typed me', text);
  }

  constructor(private tempServiceService: TempServiceService) {}

  ngOnInit(): void {
    this.myStuff = this.tempServiceService.getMyStuff();
  }
}
