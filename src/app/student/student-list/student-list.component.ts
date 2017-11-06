import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	students: Model.Student[];

	constructor( private backendService: BackendService ) {
		this.backendService.getStudents().subscribe((data) => this.students = data);
	}

	ngOnInit() {
	}

}
