import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-info',
	template: '<span>{{ userName }}</span>',
	styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
	userName: string;

	constructor() {
		this.userName = 'Иванов Иван';
	}
}
