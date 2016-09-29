import {Component, OnInit} from '@angular/core';
import {WidgetsService} from '../common/widgets.service';
import {Widget} from './widgets.model';


@Component ({
	selector:'widget',
	template: require('./widgets.component.html'),
	styles: [`
		.scroll {
			height: 60px;
			widht: 300px;
			overflow: scroll;
		}
	`],
})

export class Widgets {

	origin: string = "USA";
	cost: string = "$400";

	inputVal: string;

	message: string = "Heyya!";

	xpos = 'translateX(0px)';

	widgets: Widget[];

	count = 0;

	handleScroll(){
		console.log("scroll")
	}

	constructor(private _widgetsService: WidgetsService){
		setInterval(() => {
			(this.safeTransform())
		},500)
	}

	ngOnInit() {
		this.widgets = this._widgetsService.getWidgets();
	}


	safeTransform(){
		this.count+=5;
		this.xpos = `translateX(${this.count}px)`
	}

}