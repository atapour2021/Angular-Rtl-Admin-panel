import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { NavItem } from './menu-list-item/nav-item';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'fas fa-tachometer-alt',
      route: 'dashboard',
    },
    {
      displayName: 'Profile',
      iconName: 'fas fa-id-card-alt',
      route: 'profile',
    },

    // sample tree menu
    {
      displayName: 'Root',
      iconName: 'fas fa-id-card-alt',
      route: 'root',
      children: [
        {
          displayName: 'Child 1',
          iconName: 'fas fa-id-card-alt',
          route: 'child 1',
        },
        {
          displayName: 'Child 2',
          iconName: 'fas fa-id-card-alt',
          route: 'child 2',
          children: [
            {
              displayName: 'Child 2_1',
              iconName: 'fas fa-id-card-alt',
              route: 'child 2_1',
            },
          ],
        },
      ],
    },
  ];

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
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
