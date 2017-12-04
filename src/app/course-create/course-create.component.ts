import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
	selector: 'app-course-create',
	templateUrl: './course-create.component.html',
	styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

	course: Model.Course;

	constructor( protected router: Router) { }

	ngOnInit() {
		this.course = this.getCourse(null);
	}

	getCourse(paramId: string | null): Model.Course {
		return {
			id: -1,
			name: '',
			isActive: false,
			summary: ''
		};
	}

	save() {
		console.log(this.course);
	}

	cancel() {
		this.router.navigate(['/courses']);
	}

	onNameChanging() {
		this.course.name = this.course.name.toUpperCase();
	}
}
