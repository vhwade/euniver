import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	getDate() {
		return new Date();
	}

	getNumberOfClass(): number {
		const now = this.getDate();
		const hour = now.getHours();
		const minute = now.getMinutes();

		let n = 1;
		if (hour >= 8 && minute >= 30 && hour <= 10 && minute <= 5 ) {
			return n;
		}
		n += 1;
		if (hour >= 10 && minute >= 15 && hour <= 11 && minute <= 50 ) {
			return n;
		}
		n += 1;
		if (hour >= 12 && minute >= 10 && hour <= 13 && minute <= 45 ) {
			return n;
		}
		n += 1;
		if (hour >= 13 && minute >= 55 && hour <= 15 && minute <= 30 ) {
			return n;
		}
		n += 1;
		if (hour >= 15 && minute >= 50 && hour <= 17 && minute <= 25 ) {
			return n;
		}
		n += 1;
		if (hour >= 17 && minute >= 35 && hour <= 19 && minute <= 10 ) {
			return n;
		}
		n += 1;
		if (hour >= 19 && minute >= 20 && hour <= 20 && minute <= 55 ) {
			return n;
		}
		return 0;
	}
}
