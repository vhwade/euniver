import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AttendanceComponent } from './report/attendance/attendance.component';
import { AttendancePipe } from './pipes/attendance.pipe';

import { BackendService } from './services/backend.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AttendanceComponent,
		AttendancePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MdlModule
	],
	providers: [BackendService],
	bootstrap: [AppComponent]
})
export class AppModule { }
