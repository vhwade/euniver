import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

	courses: Model.Course[];

	activeOnly: boolean;

	constructor(private http: HttpClient) {
		this.activeOnly = true;
	}

	ngOnInit() {
		this.http.get('../../assets/course-list.json').subscribe((data: Model.Course[]) => this.courses = data );
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
