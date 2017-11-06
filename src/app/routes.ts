import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AttendanceComponent } from './report/attendance/attendance.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'attendance', component: AttendanceComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'students', component: StudentListComponent },
	{ path: '**', component: NotFoundPageComponent }
];
