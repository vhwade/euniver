import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';


@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

	courses: Model.Course[];

	activeOnly: boolean;

	constructor(private backend: BackendService) {
		this.activeOnly = true;
	}

	ngOnInit() {
		this.backend
		.getCourseList()
		.subscribe((data: Model.Course[]) => this.courses = data );
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
