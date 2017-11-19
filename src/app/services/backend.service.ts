import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

	constructor( private http: HttpClient ) { }

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