import { Component, OnInit } from '@angular/core';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-course-edit',
	templateUrl: './course-edit.component.html',
	styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent extends CourseDetailComponent {

	private _origin: Model.Course;

	constructor( protected activateRoute: ActivatedRoute, protected router: Router ) {
		super(activateRoute, router);
	}

	getCourse(paramId: string): Model.Course {
		this.origin = super.getCourse(paramId);
		return this.origin;
	}

	protected get origin(): Model.Course {
		return {
			id: this._origin.id,
			name: this._origin.name,
			summary: this._origin.summary,
			isActive: this._origin.isActive
		};
	}

	protected set origin(value: Model.Course) {
		this._origin = value;
	}

	save() {
		console.log(this.course);
	}

	cancel() {
		this.course = this.origin;
	}
}

