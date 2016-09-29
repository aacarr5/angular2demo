import {Component} from '@angular/core';

@Component({
	selector: 'demo',
	template: require('./demo.component.html'),
	styles: [`
		button {
			background-color:none;
			border: none;
			outline: none;
			padding: 10px;
			color: white;
			min-width: 80px;
			height: 50px;
		}
	`]
})

export class Demo {
	message: string = 'Hello forom the Demo';

	pressDown()  {
		alert("hi");
	}

}