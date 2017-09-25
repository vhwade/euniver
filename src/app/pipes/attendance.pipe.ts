import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'attendance'
})
export class AttendancePipe implements PipeTransform {
	transform(value: number, symbol: string, delimiter: string = '/'): any {
		return value !== null  ? _.join(_.times(Math.abs(value - 2), _.constant(symbol)), delimiter) : '';
	}
}
