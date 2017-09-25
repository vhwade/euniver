import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AttendanceComponent } from './report/attendance/attendance.component';
import { AttendancePipe } from './pipes/attendance.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AttendanceComponent,
		AttendancePipe
	],
	imports: [
		BrowserModule,
		MdlModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
