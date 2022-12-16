import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public version: BehaviorSubject<number>;
  constructor() {
    this.version = new BehaviorSubject<number>(1);
  }
}
