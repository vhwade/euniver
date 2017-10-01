import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

	constructor( private http: Http ) { }

	public getStudents(): Observable<Model.Student[]> {
		return this.http.get('../../assets/students.json').map(response => {
			return response.json() as Model.Student[];
		});
	}

	public getClasses(): Observable<Model.ReportClass[]> {
		return this.http.get('../../assets/classes.json').map(response => {
			return response.json() as Model.ReportClass[];
		});
	}
}