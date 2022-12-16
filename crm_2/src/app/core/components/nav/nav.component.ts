import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public versionNumber!: number;
  public version: BehaviorSubject<number>;
  constructor(private versionService: VersionService) {
    this.version = this.versionService.version;
    
    this.versionService.version.subscribe(
      (data) => (this.versionNumber = data)
    );
  }

  public upgrade() {
    this.version.next(this.versionNumber + 1);
  }
}
