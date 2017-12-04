import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CueService } from './cue.service';

@Injectable()
export class BackendService {

	constructor( private http: HttpClient, private cue: CueService ) { }

	public getCourseList(): Observable<Model.Course[]> {
		this.cue.loading('courseList');

		return this.http
		.get('../../assets/course-list.json')
		.map((data) => {
			const response = data['courses'] as Array<any>;
			const result = [];
			const l = response.length;
			for ( let i = 0; i < l; i += 1 ) {
				const crs = response[i];
				result.push({
					id: crs.id,
					name: crs['courseName'],
					summary: crs['note'] || '',
					isActive: crs['active']
				} as Model.Course);
			}

			setTimeout(() => this.cue.loaded('courseList'), 2000);
			return result;
		} );
	}

	public getStudents(): Observable<Model.Student[]> {
		return this.http.get('../../assets/students.json').map((response) => {
			return <Model.Student[]>response;
		});
	}

	public getClasses(): Observable<Model.ReportClass[]> {
		return this.http.get('../../assets/classes.json').map(response => {
			return response as Model.ReportClass[];
		});
	}
}
