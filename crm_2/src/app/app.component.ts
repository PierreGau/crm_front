import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  //Observable (froid)
  private obs: Observable<any>;

  //observable (chaud)
  private sbj: Subject<any>;

  private behave: BehaviorSubject<any>;
  constructor() {
    this.title = 'oui';

    //--------- Observable froid ---------
    this.obs = new Observable<any>((listXSubscribers) => {
      listXSubscribers.next(Math.random());
    });
    this.obs.subscribe((data) => console.log(data));
    this.obs.subscribe((data) => console.log(data));
    //--------------------------------------

    //--------- Observable chaud ---------
    this.sbj = new Subject<any>();

    this.sbj.subscribe((data) => console.log(data));
    this.sbj.next('toto');
    this.sbj.subscribe((data) => console.log(data));
    this.sbj.next('toto2');
    //-------------------------------------

    this.behave = new BehaviorSubject<any>('oui');

    this.behave.next('toto2');
    this.behave.subscribe((data) => console.log(data));
    this.behave.next(Math.random());
    this.behave.subscribe((data) => console.log(data));
  }
}
