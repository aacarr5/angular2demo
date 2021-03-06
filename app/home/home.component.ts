import {Component, OnInit} from '@angular/core';
import {StateService}      from '../common/state.service';
import {Config}            from '../common/config.model';
import {Users}             from '../users/users.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  directives: [Users]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;
  greeting: string;
  config: Config;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.greeting = this._stateService.superGreeting;
    this.config = this._stateService.config;
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }

  alertTheWorld(): void{
    console.log("Hello");

  }
}
