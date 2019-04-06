import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  @Output() customOutput = new EventEmitter<string>();

  onKeyup(evt) {
    console.log('is there even an event bro?', evt);
    this.customOutput.emit(evt);
  }

  constructor() { }

  ngOnInit() {
  }

}
