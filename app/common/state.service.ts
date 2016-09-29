import {Injectable} from '@angular/core';

import {Config} from './config.model';

@Injectable()
export class StateService {
	private _message = 'Hello Message';

	private _author = '';

  superGreeting = "NOW WE REALLY SAY HELLO";

  config: Config = {
    name: "I am the config",
    description: "I do the most configy things"
  };

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

  getAuthor(): string {
  	return this._author;
  }

  setAuthor(newAuthor: string): void {
  	this._author = newAuthor;
  }
}
