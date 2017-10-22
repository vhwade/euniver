import { Component } from '@angular/core';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

	courses: Model.Course[];

	activeOnly: boolean;

	constructor() {

		this.activeOnly = true;

		this.courses = [
			{
				id: 1,
				name: 'Розробка Web-додатків',
				summary: 'Дисципліна спрямована на формування у студентів теоретичних знань, практичних вмінь та навичок щодо розробки Web-додатків.',
				isActive: true
			},
			{ id: 2, name: 'Цифрова фотографія', isActive: true },
			{ id: 3, name: 'Основи програмування', isActive: false }
		];
	}

	filterCoursesByActiveStatus(event) {
		this.activeOnly = !this.activeOnly;
		console.log('Стан змінено');
		console.log(event);
	}

	writeCourseInfo(course: Model.Course) {
		console.log(course);
	}
}
