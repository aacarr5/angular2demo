import {Injectable} from '@angular/core';
import {Widget} from '../widgets/widgets.model';
import {PricingService} from './pricing.service';


@Injectable ()
export class WidgetsService {
	private widgets: Widget[] = [
		{name: "Andrew", origin: "USA",cost:400},
		{name: "Bob", origin: "Brazil",cost:500},
		{name: "Dana", origin: "Germany",cost:600}
	];

	getWidgets(): Widget[] {
		return this.widgets;
	};

	constructor(pricingService:PricingService){
		this.widgets.map(widget => {
			widget.cost = PricingService.halfPrice(widget.cost)
			return widget;
		})
	}

}