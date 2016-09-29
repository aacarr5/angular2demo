import {
	describe,
	expect,
	it
} from '@angular/core/testing';


import {Widgets} from './widgets.component';

describe('Widgets Component', ()=> {
	it('should be named Widgets', ()=>{
		expect(Widgets.name).toBe('Widgets')
	})
})