import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CueService {

	private _loading = new BehaviorSubject<string>(null);
	loading$ = this._loading.asObservable();

	private _loaded = new BehaviorSubject<string>(null);
	loaded$ = this._loaded.asObservable();

	constructor() { }

	loading(name: string) {
		this._loading.next(name);
	}

	loaded(name: string) {
		this._loaded.next(name);
	}

}
