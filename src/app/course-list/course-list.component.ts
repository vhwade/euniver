import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { CueService } from '../services/cue.service';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

	courses: Model.Course[];
	loading: boolean = false;

	activeOnly: boolean;

	constructor(
		private backend: BackendService,
		private cue: CueService
	) {
		this.activeOnly = true;

		this.cue.loading$.filter((value) => value === 'courseList').subscribe((x) => this.loading = true);
		this.cue.loaded$.filter((value) => value === 'courseList').subscribe((x) => this.loading = false);
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
