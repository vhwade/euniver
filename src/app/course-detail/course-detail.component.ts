import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-course-detail',
	templateUrl: './course-detail.component.html',
	styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnDestroy {
	routeSubscription: Subscription;

	courses = [
		{
			id: 1,
			name: 'Розробка Web-додатків',
			summary: 'Дисципліна спрямована на формування у студентів теоретичних знань, практичних вмінь та навичок щодо розробки Web-додатків.',
			isActive: true
		},
		{ id: 2, name: 'Цифрова фотографія', isActive: true },
		{ id: 3, name: 'Основи програмування', isActive: false }
	];

	course: Model.Course;
	id: number;

	constructor(protected activateRoute: ActivatedRoute, protected router: Router ) {
		this.routeSubscription = activateRoute.params.subscribe(params => this.course = this.getCourse(params['id']));
	}

	getCourse(paramId: string): Model.Course {
		const id = +paramId;
		for (let i = 0; i < this.courses.length; i++) {
			if ( this.courses[i].id === id ) {
				return this.courses[i];
			}
		}
		this.router.navigate(['/page-not-found']);
	}

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	}
}
