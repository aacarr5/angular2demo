import {Injectable} from '@angular/core';

@Injectable()
export class PricingService{
	static halfPrice(price){
		return price * 0.5;
	}
}