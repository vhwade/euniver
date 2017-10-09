import { Component } from '@angular/core';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

	courses: Model.Course[];

	constructor() {
		this.courses = [
			{
				id: 1,
				name: 'Розробка Web-додатків',
				summary: 'Дисципліна спрямована на формування у студентів теоретичних знань, практичних вмінь та навичок щодо розробки Web-додатків.'
			},
			{ id: 2, name: 'Цифрова фотографія' },
			{ id: 3, name: 'Основи програмування' }
		];
	}
}
