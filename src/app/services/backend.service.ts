import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

	constructor( private http: HttpClient ) { }

	public getCourseList(): Observable<Model.Course[]> {
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
