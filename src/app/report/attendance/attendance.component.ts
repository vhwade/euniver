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

	constructor(private backendService: BackendService ) { }

	ngOnInit() {
		this.backendService.getClasses().subscribe((data) => {
			this.reportClasses = data;
			this.defineShownReportClassIds();
		});
		this.backendService.getStudents().subscribe((data) => this.students = data);
	}

	getTotal(attendances: Array<Model.Attendance>) {
		return _.reduce(attendances, function(sum: number, a: Model.Attendance) {
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
					_.filter(this.reportClasses, (rc) => new Date(rc.start).getTime() < now && new Date(rc.end).getTime() > now ), 'id');
			}
			break;
			case 'todate': {
				this.shownReportClassIds = _.map(
					_.filter(this.reportClasses, (rc) => new Date(rc.start).getTime() < now), 'id');
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

}
