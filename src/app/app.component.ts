import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import {Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation]
})
export class AppComponent {
  title = 'avaBavely';
  loading = true;
  constructor(private router: Router) {
    router.events.subscribe((routerEvet: Event) => {
      this.checkRouterEvent(routerEvet);
    });
  }
    checkRouterEvent(routerEvent: Event): void {
      if ( routerEvent instanceof NavigationStart) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    }
}
