import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { BackendService } from '../../services/backend.service';

declare type ReportViewMode = 'now' | 'todate' | 'all' | 'summary';

@Component({
	selector: 'app-attendance',
	templateUrl: './attendance.component.html',
	styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

	discipline: Model.Discipline;
	students: Model.Student[];
	reportClasses: Array<Model.ReportClass>;

	shownReportClassIds: number[];

	viewMode: ReportViewMode = 'all';

	constructor() { }

	ngOnInit() {
		this.reportClasses = this._getReportClasses();
		this.students = this._getStudents();
		this.defineShownReportClassIds();
	}

	getTotal(attendances: Array<Model.Attendance>) {
		return _.reduce(attendances, function (sum: number, a: Model.Attendance) {
			return sum + a.hours;
		}, 0);
	}

	setChangeViewMode(currentViewMode) {
		this.viewMode = currentViewMode;
		this.defineShownReportClassIds();
	}

	isReportClassShown(id: number): boolean {
		return this.shownReportClassIds.indexOf(id) !== -1;
	}

	defineShownReportClassIds() {
		const now = new Date().getTime();

		switch (this.viewMode) {
			case 'now': {
				this.shownReportClassIds = _.map(
					_.filter(this.reportClasses, (rcl) => rcl.start.getTime() < now && rcl.end.getTime() > now), 'id');
			}
				break;
			case 'todate': {
				this.shownReportClassIds = _.map(
					_.filter(this.reportClasses, (rc) => rc.start.getTime() < now), 'id');
			}
				break;
			case 'all': {
				this.shownReportClassIds = _.map(this.reportClasses, 'id');
			}
				break;
			case 'summary': {
				this.shownReportClassIds = [];
			}
				break;
		}
	}

	private _getReportClasses(): Model.ReportClass[] {
		return [
			{
				id: 1,
				classKind: 'lecture',
				start: new Date('09-02-2017 12:10'),
				end: new Date('09-02-2017 13:45')
			},
			{
				id: 2,
				classKind: 'lab',
				start: new Date('09-04-2017 12:10'),
				end: new Date('09-04-2017 13:45')
			},
			{
				id: 3,
				classKind: 'lecture',
				start: new Date('09-11-2017 15:50'),
				end: new Date('09-11-2017 17:25')
			},
			{
				id: 4,
				classKind: 'lab',
				start: new Date('09-11-2017 17:35'),
				end: new Date('09-11-2017 19:10')
			},
			{
				id: 5,
				classKind: 'lab',
				start: new Date('09-18-2017 17:35'),
				end: new Date('09-18-2017 19:10')
			},
			{
				id: 6,
				classKind: 'lecture',
				start: new Date('09-25-2017 15:50'),
				end: new Date('09-25-2017 17:25')
			},
			{
				id: 7,
				classKind: 'lab',
				start: new Date('09-25-2017 17:35'),
				end: new Date('09-25-2017 19:10')
			},
			{
				id: 8,
				classKind: 'lecture',
				start: new Date('09-25-2017 17:35'),
				end: new Date('09-25-2017 19:10')
			},
			{
				id: 9,
				classKind: 'lab',
				start: new Date('10-02-2017 17:35'),
				end: new Date('10-02-2017 19:10')
			},
			{
				id: 10,
				classKind: 'lecture',
				start: new Date('10-02-2017 17:35'),
				end: new Date('10-02-2017 19:10')
			},
			{
				id: 11,
				classKind: 'lab',
				start: new Date('10-09-2017 17:35'),
				end: new Date('10-09-2017 19:10')
			},
			{
				id: 12,
				classKind: 'lecture',
				start: new Date('10-09-2017 17:35'),
				end: new Date('10-09-2017 19:10')
			},
			{
				id: 13,
				classKind: 'lab',
				start: new Date('10-16-2017 17:35'),
				end: new Date('10-16-2017 19:10')
			},
			{
				id: 14,
				classKind: 'lecture',
				start: new Date('10-16-2017 17:35'),
				end: new Date('10-16-2017 19:10')
			},
			{
				id: 15,
				classKind: 'lab',
				start: new Date('10-23-2017 17:35'),
				end: new Date('10-23-2017 19:10')
			},
			{
				id: 16,
				classKind: 'lecture',
				start: new Date('10-23-2017 17:35'),
				end: new Date('10-23-2017 19:10')
			},
			{
				id: 17,
				classKind: 'lab',
				start: new Date('10-30-2017 17:35'),
				end: new Date('10-30-2017 19:10')
			},
			{
				id: 18,
				classKind: 'lecture',
				start: new Date('10-30-2017 17:35'),
				end: new Date('10-30-2017 19:10')
			},
			{
				id: 19,
				classKind: 'lab',
				start: new Date('11-06-2017 17:35'),
				end: new Date('11-06-2017 19:10')
			},
			{
				id: 20,
				classKind: 'lab',
				start: new Date('11-13-2017 17:35'),
				end: new Date('11-13-2017 19:10')
			},
			{
				id: 21,
				classKind: 'lab',
				start: new Date('11-20-2017 17:35'),
				end: new Date('11-20-2017 19:10')
			},
			{
				id: 22,
				classKind: 'lab',
				start: new Date('11-27-2017 17:35'),
				end: new Date('11-27-2017 19:10')
			}
		];
	}

	private _getStudents(): Model.Student[] {
		return [
			{
				id: 1,
				firstName: 'Анна',
				lastName: 'Белозёрова',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 2,
				firstName: 'Михаил',
				lastName: 'Богданов',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 3,
				firstName: 'Анастасия',
				lastName: 'Бондарь',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 4,
				firstName: 'Елизавета',
				lastName: 'Винникова',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 5,
				firstName: 'Алексей',
				lastName: 'Гладков',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 6,
				firstName: 'Вадим',
				lastName: 'Глебов',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 7,
				firstName: 'Виктория',
				lastName: 'Граненко',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 8,
				firstName: 'Максим',
				lastName: 'Жигайло',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 9,
				firstName: 'Анна',
				lastName: 'Кирияк',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 10,
				firstName: 'Виктория',
				lastName: 'Коломиец',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 11,
				firstName: 'Диана',
				lastName: 'Лукьяненко',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 12,
				firstName: 'Магомед',
				lastName: 'Магомедсаидов',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 13,
				firstName: 'Евгений',
				lastName: 'Милка',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 14,
				firstName: 'Анастасия',
				lastName: 'Перец',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 15,
				firstName: 'Анастасия',
				lastName: 'Попова',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 16,
				firstName: 'Андрей',
				lastName: 'Сидоренко',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 17,
				firstName: 'Николай',
				lastName: 'Скопп',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 18,
				firstName: 'Алина',
				lastName: 'Токарь',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 19,
				firstName: 'Дарья',
				lastName: 'Хохленкова',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 20,
				firstName: 'Владислав',
				lastName: 'Федосеев',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 21,
				firstName: 'Валерия',
				lastName: 'Белицкая',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 22,
				firstName: 'Кевин',
				lastName: 'Виноградов',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 23,
				firstName: 'Ольга',
				lastName: 'Водяницкая',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 24,
				firstName: 'Валерия',
				lastName: 'Ильчева',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 25,
				firstName: 'Павел',
				lastName: 'Скуменко',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			},
			{
				id: 26,
				firstName: 'Дарина',
				lastName: 'Худолий',
				attendances: [
					{
						classId: 1,
						hours: 2
					},
					{
						classId: 2,
						hours: 2
					},
					{
						classId: 3,
						hours: 2
					},
					{
						classId: 4,
						hours: 2
					},
					{
						classId: 5,
						hours: 2
					},
					{
						classId: 6,
						hours: 2
					},
					{
						classId: 7,
						hours: 2
					},
					{
						classId: 8,
						hours: 2
					},
					{
						classId: 9,
						hours: 2
					},
					{
						classId: 10,
						hours: 2
					},
					{
						classId: 11,
						hours: 2
					},
					{
						classId: 12,
						hours: 2
					},
					{
						classId: 13,
						hours: 2
					},
					{
						classId: 14,
						hours: 2
					},
					{
						classId: 15,
						hours: 2
					},
					{
						classId: 16,
						hours: 2
					},
					{
						classId: 17,
						hours: 2
					},
					{
						classId: 18,
						hours: 2
					},
					{
						classId: 19,
						hours: 2
					},
					{
						classId: 20,
						hours: 2
					},
					{
						classId: 21,
						hours: 2
					},
					{
						classId: 22,
						hours: 2
					}
				],
				achievements: []
			}
		]
	}
}
