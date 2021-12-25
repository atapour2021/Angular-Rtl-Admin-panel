import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs/operators';
import { Base } from 'src/app/sheard/base/base.class';
import { NavItem } from './menu-list-item/nav-item';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent extends Base implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  _observer!: BreakpointObserver;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'fas fa-tachometer-alt',
      route: 'dashboard'
    },
    {
      displayName: 'Profile',
      iconName: 'fas fa-id-card-alt',
      route: 'profile'
    }
  ];

  constructor(
    translate: TranslateService,
    private observer: BreakpointObserver
  ) {
    super(translate);
    this._observer = observer;
  }

  ngAfterViewInit(): void {
    this._observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
