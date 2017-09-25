import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'app-attendance',
	templateUrl: './attendance.component.html',
	styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

	students: Array<Model.Student>;
	reportClasses: Array<Model.ReportClass>;
	discipline: Model.Discipline;

	constructor() { }

	ngOnInit() {
		this.reportClasses = this._getMockReportClasses();
		this.students = this._getMockStudents();
	}

	getTotal(attendances: Array<Model.Attendance>) {
		return _.reduce(attendances, function(sum: number, a: Model.Attendance) {
			return sum + a.hours;
		  }, 0);

	}

	private _getMockReportClasses() {

		const reportClasses: Array<Model.ReportClass> = [
			{
				id: 1,
				classKind: 'lecture',
				start: new Date(2017, 8, 2, 12, 10),
				end: new Date(2017, 8, 2, 13, 45)
			},
			{
				id: 2,
				classKind: 'lab',
				start: new Date(2017, 8, 4, 12, 10),
				end: new Date(2017, 8, 4, 13, 45)
			},
			{
				id: 3,
				classKind: 'lecture',
				start: new Date(2017, 8, 11, 15, 50),
				end: new Date(2017, 8, 11, 17, 25)
			},
			{
				id: 4,
				classKind: 'lab',
				start: new Date(2017, 8, 11, 17, 35),
				end: new Date(2017, 8, 11, 19, 10)
			},
			{
				id: 5,
				classKind: 'lab',
				start: new Date(2017, 8, 18, 17, 35),
				end: new Date(2017, 8, 18, 19, 10)
			}
		];

		return reportClasses;
	}

	private _getMockStudents() {

		const students: Array<Model.Student> = [
			{
				id : 1,
				firstName: 'Vasya',
				lastName: 'Pupkin',
				attendances: [
					{ classId: 1, hours: 2 },
					{ classId: 2, hours: 1 },
					{ classId: 3, hours: 2 },
					{ classId: 4, hours: 0 },
					{ classId: 5, hours: 2 }
				],
				achievements: []
			},
			{
				id : 2,
				firstName: 'Petya',
				lastName: 'Petrov',
				attendances: [
					{ classId: 1, hours: 2 },
					{ classId: 2, hours: 2 },
					{ classId: 3, hours: 1 },
					{ classId: 4, hours: 2 },
					{ classId: 5, hours: 2 }
				],
				achievements: []
			}
		];

		return students;
	}

	private _getMockDiscipline() {

		const discipline: Model.Discipline = { id: 1, name: 'Development of Web applications' };

		return discipline;
	}
}
