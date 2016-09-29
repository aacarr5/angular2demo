import {
	describe,
	expect,
	it
} from '@angular/core/testing';

import {Users} from './users.component';

describe ('Users Component', () => {
	it('should be named `Users`',() => {
		expect(Users.name).toBe('Users');
	})
})