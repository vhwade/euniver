namespace Model {

	export class Person {
		public id: number;
		public firstName: string;
		public lastName: string;
	}

	export class Attendance {
		public classId: number;
		public hours: number;
	}

	export class Achievement {
		public classId: number;
		public points: number;
	}

	export class Student extends Person {
		public attendances: Array<Attendance>;
		public achievements: Array<Achievement>;
	}

	export class Course {
		public id: number;
		public name: string;
		public isActive: boolean;
		public summary ?: string;
	}

	export declare type ClassKind = 'lecture' | 'practice' | 'lab' | 'exam';

	export class ReportClass {
		public id: number;
		public classKind: ClassKind;
		public start: Date;
		public end: Date;
	}
}


