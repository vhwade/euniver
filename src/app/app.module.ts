import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdlModule } from '@angular-mdl/core';

// #region Components

import { AppComponent } from './app.component';
import { AttendanceComponent } from './report/attendance/attendance.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { UserInfoComponent } from './layout/user-info/user-info.component';

// #endregion

// #region Pipes

import { AttendancePipe } from './pipes/attendance.pipe';

// #endregion

// #region Services

import { BackendService } from './services/backend.service';
import { CueService } from './services/cue.service';

// #endregion

// import { appRoutes } from './routes';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'attendance', component: AttendanceComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'course/create', component: CourseCreateComponent },
	{ path: 'course/edit/:id', component: CourseEditComponent },
	{ path: 'course/:id', component: CourseDetailComponent },
	{ path: 'students', component: StudentListComponent },
	{ path: 'page-not-found', component: NotFoundPageComponent },
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	declarations: [
		AppComponent,
		AttendanceComponent,
		AttendancePipe,
		CourseCreateComponent,
		CourseEditComponent,
		CourseDetailComponent,
		CourseListComponent,
		HeaderComponent,
		HomeComponent,
		NotFoundPageComponent,
		StudentDetailComponent,
		StudentListComponent,
		UserInfoComponent
,
    CourseCreateComponent
],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		MdlModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: [BackendService, CueService],
	bootstrap: [AppComponent]
})
export class AppModule { }
